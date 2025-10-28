import React from "react";
import logo from "../assets/Side Image.svg";
import logo5 from "../assets/Services.svg";
import logo2 from "../assets/Frame 890.svg";
import Card5 from "@/component/card5";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-[100px] md:pl-[50px] pl-[14px] md:flex justify-evenly items-center gap-7">
        <div>
          <p className="text-[36px] font-semibold">{t("ourStory")}</p>
          <br />
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping{" "}
            <br />
            makterplace with an active presense in Bangladesh. Supported <br />{" "}
            by wide range of tailored marketing, data and service solutions,{" "}
            <br /> Exclusive has 10,500 sallers and 300 brands and serves 3{" "}
            <br /> millioons customers across the region.{" "}
          </p>
          <br />
          <p>
            Exclusive has more than 1 Million products to offer, growing at a{" "}
            <br />
            very fast. Exclusive offers a diverse assotment in categories <br />
            ranging from consumer.
          </p>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 md:px-20 pb-[100px]">
        <Card5 />
        <Card5 />
        <Card5 />
        <Card5 />
      </div>

      <div className="flex justify-center mb-[30px]">
        <img src={logo2} alt="" />
      </div>

      <section className="md:flex md:mt-[0px] mt-[300px] justify-evenly items-center">
        <div className="text-center">
          <img
            className="md:ml-[90px] ml-[130px] mt-[20px] mb-[30px]"
            src={logo5}
            alt=""
          />
          <p className="font-semibold">{t("freeFastDelivery")}</p>
          <p>{t("freeDeliveryDesc")}</p>
        </div>
        <div className="text-center">
          <img
            className="md:ml-[90px] ml-[130px] mt-[20px] mb-[30px]"
            src={logo5}
            alt=""
          />
          <p className="font-semibold">{t("freeFastDelivery")}</p>
          <p>{t("freeDeliveryDesc")}</p>
        </div>
        <div className="text-center">
          <img
            className="md:ml-[90px] ml-[130px] mt-[20px] mb-[30px]"
            src={logo5}
            alt=""
          />
          <p className="font-semibold">{t("freeFastDelivery")}</p>
          <p>{t("freeDeliveryDesc")}</p>
        </div>
      </section>
    </>
  );
};

export default About;
