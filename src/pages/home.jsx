import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo from "../assets/Frame 560.png";
import logoApple from "../assets/1200px-Apple_gray_logo 1.svg";
import logo2 from "../assets/Rectangle 17.svg";
import logo3 from "../assets/Frame 601.svg";
import logo4 from "../assets/Frame 694.svg";
import logo5 from "../assets/Services.svg";
import Card from "@/component/card";
import Card2 from "@/component/card2";
import Card3 from "@/component/card3";
import Card4 from "@/component/card4";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/reducers/reducer";
import Timer from "@/component/timer";
const Home = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const { t } = useTranslation();
  let category = useSelector((store) => store.crud.categories);

  return (
    <>
      <div className="w-full">
        <div>
          <section className="my-[30px] md:max-w-[1250px] m-auto md:flex-row flex-col flex items-center gap-5 justify-between">
            <Input
              id={"inputHome"}
              className="h-[56px] md:hidden max-md:w-[90%] block text-[20px] font-medium"
              placeholder={t("search")}
            />
            <ul className="md:w-[238px] max-md:m-auto w-[95%] max-md:flex flex-wrap gap-[20px] max-md:my-[30px] md:border-r-[1px] md:border-[#0000001A]">
              {category &&
                category.slice(0, 9).map((e) => (
                  <Link key={e.id} to="/product">
                    <li className="p-2 text-[15px] max-md:rounded-[4px] max-md:flex max-md:items-center max-md:justify-center max-md:bg-[#F5F5F5] font-medium">
                      <h1>{e.categoryName}</h1>
                    </li>
                  </Link>
                ))}
            </ul>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <span className="md:hidden block ">
                  <img src={logo} alt="iphone" />
                </span>
                <span className="md:block hidden ">
                  <img src={logo} alt="swiper Iphone" />
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className="md:block hidden ">
                  <img src={logo} alt="swiper Iphone" />
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className="md:block hidden ">
                  <img src={logo} alt="swiper Iphone" />
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className="md:block hidden ">
                  <img src={logo} alt="swiper Iphone" />
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className="md:block hidden ">
                  <img src={logo} alt="swiper Iphone" />
                </span>
              </SwiperSlide>
            </Swiper>
          </section>
        </div>
      </div>

      <header className="md:max-w-[1500px] m-auto px-4 md:pl-[140px] pt-[50px] md:pt-[100px]">
        <div className="flex flex-wrap items-center gap-4">
          <img src={logo2} alt="" />
          <p className="text-[#DB4444] text-[16px] font-semibold">
            {t("today")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:gap-30 gap-4">
          <div className="">
            <p className="text-[28px] md:text-[36px] items-center font-bold">
              {t("flashSales")}
            </p>
          </div>
          <div className="flex text-2xl md:text-3xl font-bold mt-[10px] gap-2 items-center">
            <Timer />
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 ">
          <Card />
          <Card />
        </div>
        <section>
          <div className="flex flex-wrap items-center gap-4 mt-[50px]">
            <img src={logo2} alt="" />
            <p className="text-[#DB4444] text-[16px] font-semibold">
              {t("categories")}
            </p>
          </div>
          <div className="mt-[30px]">
            <h1 className="text-[28px] md:text-[36px] font-semibold">
              {t("browseCategory")}
            </h1>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-[30px]">
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
        </section>
        <section>
          <div className="flex flex-wrap items-center gap-4 mt-[50px]">
            <img src={logo2} alt="" />
            <p className="text-[#DB4444] text-[16px] font-semibold">
              {t("thisMonth")}
            </p>
          </div>
          <div className="">
            <p className="text-[28px] md:text-[36px] font-semibold">
              {t("bestSelling")}
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 ">
            <Card />
            <Card />
          </div>
        </section>
        <section className="bg-[black] text-white flex flex-col md:flex-row items-center mb-[40px] justify-center gap-10 md:gap-20 w-full md:w-[90%] p-7 mt-[50px]">
          <div className="text-center md:text-left">
            <p>{t("categories")}</p>
            <p className="text-[28px] md:text-[36px]">{t("musicExp")}</p>
            <Timer />
            <button className="bg-[#00FF66] w-[200px] h-[40px] mt-[20px] md:mt-[60px]">
              {t("buyNow")}
            </button>
          </div>
          <div className="">
            <img src={logo4} alt="" />
          </div>
        </section>
        <section>
          <div className="flex flex-wrap items-center gap-4 mt-[100px]">
            <img src={logo2} alt="" />
            <p className="text-[#DB4444] text-[16px] font-semibold">
              {t("featured")}
            </p>
          </div>
          <div className="">
            <h1 className="text-[28px] md:text-[36px] font-semibold">
              {t("newArrival")}
            </h1>
          </div>
          <Card4 />
        </section>
        <section className="md:flex justify-evenly text-center py-6">
          <div className="flex flex-col items-center flex-1">
            <img className="mb-4 mt-4" src={logo5} alt="" />
            <p className="font-semibold">{t("freeFastDelivery")}</p>
            <p>{t("freeDeliveryDesc")}</p>
          </div>

          <div className="flex flex-col items-center flex-1">
            <img className="mb-4 mt-4" src={logo5} alt="" />
            <p className="font-semibold">{t("freeFastDelivery")}</p>
            <p>{t("freeDeliveryDesc")}</p>
          </div>

          <div className="flex flex-col items-center flex-1">
            <img className="mb-4 mt-4" src={logo5} alt="" />
            <p className="font-semibold">{t("freeFastDelivery")}</p>
            <p>{t("freeDeliveryDesc")}</p>
          </div>
        </section>
      </header>
    </>
  );
};

export default Home;
