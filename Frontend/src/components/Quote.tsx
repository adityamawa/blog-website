import { memo } from "react";

const Quote = () => {
  return (
    <div className="h-screen bg-slate-200 flex justify-center  items-center">
      <div className="w-full ml-[20%]">
        <div className="max-w-lg text-left font-bold md:text-xl lg:text-3xl">
        "What you do after you create your content is what truly counts"
        </div>
        <div className="max-w-md pl-0 pb-1 p-3 text-left text-2xl">
        Gary Vaynerchuk
        </div>
        <div className="max-w-md text-left text-xl text-gray-400">
         CEO , VaynerMedia
        </div>
      </div>
    </div>
  );
};

export default memo(Quote);
