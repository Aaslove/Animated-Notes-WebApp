import React from "react";

function Background() {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div className="absolute top-[5%] text-zinc-600 justify-center flex w-full py-10 font-semibold text-xl">
          Document
        </div>
        <h1 className="absolute top-1/2 left-1/2 text-[13vw] tracking-tighter leading-none -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
