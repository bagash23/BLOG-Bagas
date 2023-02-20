import React from "react";

const UploadImage = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div class="shrink-0">
        <img
          class="h-16 w-16 object-cover rounded-full"
          src={require("../../assets/images/monster.png")}
          alt="upload-iamge"
        />
      </div>
      <label class="block">
        <span class="sr-only">Pilih Gambar</span>
        <input
          type="file"
          class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
        />
      </label>
    </div>
  );
};

export default UploadImage;
