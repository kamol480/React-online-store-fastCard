import React from "react";
import ps5 from "../assets/ps5-slim-goedkope-playstation_large 1.svg";
import woman from "../assets/attractive-woman-wearing-hat-posing-black-background 1.svg";
import speaker from "../assets/Frame 707.svg";
import perfume from "../assets/Frame 706.svg";
import { useTranslation } from "react-i18next";

const Card4 = () => {
  const { t } = useTranslation();
  return (
    <section className="w-[90%]  ml-[10px]  md:ml-[-5px] h-[600px] mx-auto mt-10">
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative h-[300px] lg:h-[500px] rounded-lg overflow-hidden">
          <img
            src={ps5}
            alt="PlayStation 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-semibold mb-1">{t("ps5Title")}</h2>
            <p className="text-sm mb-2 w-[80%] leading-tight">
              {t("ps5Desc")}
            </p>
            <button className="underline font-semibold">{t("shopNow")}</button>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-6">
          <div className="relative h-[230px] lg:h-[245px] rounded-lg overflow-hidden">
            <img
              src={woman}
              alt="Women's Collections"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-xl font-semibold mb-1">
                {t("womenTitle")}
              </h2>
              <p className="text-sm mb-2 leading-tight">
                {t("womenDesc")}
              </p>
              <button className="underline font-semibold">{t("shopNow")}</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-[230px] rounded-lg overflow-hidden">
              <img
                src={speaker}
                alt="Speakers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-lg font-semibold mb-1">{t("speakersTitle")}</h2>
                <p className="text-sm mb-2 leading-tight">
                  {t("speakersDesc")}
                </p>
                <button className="underline font-semibold">{t("shopNow")}</button>
              </div>
            </div>

            <div className="relative h-[230px] rounded-lg overflow-hidden">
              <img
                src={perfume}
                alt="Perfume"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-lg font-semibold mb-1">{t("perfumeTitle")}</h2>
                <p className="text-sm mb-2 leading-tight">
                  {t("perfumeDesc")}
                </p>
                <button className="underline font-semibold">{t("shopNow")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card4;
