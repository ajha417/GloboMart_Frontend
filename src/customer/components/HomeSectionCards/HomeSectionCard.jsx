import React from "react";

const HomeSectionCard = () => {
  return (
    <div
      className="cursor-pointer flex items-center flex-col bg-white shadow-lg 
    rounded-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover w-full h-full object-top"
          src="https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/c/z/a/xxl-men-s-dupian-silk-checkered-embroidered-kurta-pinglaksha-original-imagmwkujpyxjxcg.jpeg?q=70&crop=false"
          alt="kurta image"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-grey-900">Notifier</h3>
        <p className="mt-2 text-sm text-grey-500">this is title</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
