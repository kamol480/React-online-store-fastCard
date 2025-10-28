import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Stethoscope } from "lucide-react";

let api = "https://store-api.softclub.tj";
let access_token = null;
let sId = null;

if (typeof window !== "undefined") {
  access_token = localStorage.getItem("token");

  if (access_token) {
    try {
      sId = jwtDecode(access_token);
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }
}

let checking = {
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
};

export let register = createAsyncThunk("crud/register", async (regObj) => {
  try {
    let { data } = await axios.post(
    "https://store-api.softclub.tj/Account/register",
    regObj
  );
  return data;
  } catch (error) {
    console.error(error);
    
  }
});

export let getData = createAsyncThunk("get/products", async () => {
  let { data } = await axios.get(`${api}/Product/get-products`);
  return data.data.products;
});

export let Brand = createAsyncThunk("get/brand", async () => {
  let { data } = await axios.get(`${api}/Brand/get-brands`);
  return data.data;
});


export let getUserById = createAsyncThunk("get/getUserById", async () => {
  let { data } = await axios.get(
    `${api}/UserProfile/get-user-profile-by-id?id=${sId.sid}`,
    checking
  );
  return data.data;
});

export let getCart = createAsyncThunk("getCart/crud", async () => {
  let { data } = await axios.get(
    `${api}/Cart/get-products-from-cart`,
    checking
  );
  return data.data[0].productsInCart;
});

export let getbyId = createAsyncThunk("getByid/crud", async (id) => {
  try {
    let { data } = await axios.get(
      `${api}/Product/get-product-by-id?id=${id}`,
      checking
    );
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export let getProductBycategory = createAsyncThunk(
  "get/byCategory",
  async (idcategory) => {
    try {
      let { data } = await axios.get(
        `${api}/Product/get-products?CategoryId=${idcategory}`
      );
      return data.data.products;
    } catch (error) {
      console.error(error);
    }
  }
);

export let getProductByBrand = createAsyncThunk(
  "get/byBrand",
  async (idbrand) => {
    let { data } = await axios.get(
      `${api}/Product/get-products?BrandId=${idbrand}`
    );
    return data.data.products;
  }
);

export let inc = createAsyncThunk("inc/product", async (id, { dispatch }) => {
  await axios.put(
    `${api}/Cart/increase-product-in-cart?id=${id}`,
    {},
    checking
  );
  dispatch(getCart());
});

export let dec = createAsyncThunk("dec/product", async (id, { dispatch }) => {
  await axios.put(`${api}/Cart/reduce-product-in-cart?id=${id}`, {}, checking);
  dispatch(getCart());
});

export let clear = createAsyncThunk("clear/cart", async (_, { dispatch }) => {
  await axios.delete(`${api}/Cart/clear-cart`, checking);
  dispatch(getCart());
});

export let getCategory = createAsyncThunk("get/category", async () => {
  let { data } = await axios.get(
    `${"https://store-api.softclub.tj/Category/get-categories"}`
  );
  return data.data;
});

export let PostInCart = createAsyncThunk("PostInCart/crud", async (id) => {
  await axios.post(
    `https://store-api.softclub.tj/Cart/add-product-to-cart?id=${id}`,
    {},
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
});

export let crud = createSlice({
  name: "crud",
  initialState: {
    products: [],
    loading: false,
    error: null,
    token: null,
    categories: [],
    brands: [],
    cart: [],
    totalPrice: 0,
    userById: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.userById = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(Brand.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(Brand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getbyId.fulfilled, (state, value) => {
        state.products = value.payload;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.totalPrice = action.payload.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );
      })
      .addCase(getProductBycategory.fulfilled, (state, value) => {
        state.products = value.payload;
      })
      .addCase(getProductByBrand.fulfilled, (state, value) => {
        state.products = value.payload;
      });
  },
});

export default crud.reducer;
