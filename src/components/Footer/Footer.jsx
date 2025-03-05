import React from "react";

const Footer = () => {
  return (
    <div className="relative mt-16 py-6 bg-[#002f34] text-white/60 flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-screen-xl px-4 py-6">
        <img
          className="w-32 md:w-48"
          src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1"
          alt="CarTrade Tech"
        />
        <div className="flex flex-wrap items-center gap-4 md:gap-8 pl-0 md:pl-8 md:border-l">
          <img
            className="w-12 md:w-16"
            src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1"
            alt="OLX"
          />
          <img
            className="w-16 md:w-28"
            src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1"
            alt="CarWale"
          />
          <img
            className="w-16 md:w-28"
            src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1"
            alt="BikeWale"
          />
          <img
            className="w-16 md:w-28"
            src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1"
            alt="CarTrade"
          />
          <img
            className="w-16 md:w-28"
            src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1"
            alt="Mobility"
          />
        </div>
      </div>
      <p className="absolute bottom-2 text-sm">All rights reserved © 2025 OLX</p>
    </div>
  );
};

export default Footer;
