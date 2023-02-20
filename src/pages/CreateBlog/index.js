import React from "react";
import {
  Input,
  Gap,
  Button,
  Link,
  UploadImage,
  TextArea,
} from "../../components/atoms";
import { useHistory } from "react-router-dom";
const CreateBlog = () => {
  const history = useHistory();
  return (
    <section className="py-20 ">
      <div className="container bg-white lg:sw-[40%] w-none py-3">
        <img
          src={require("../../assets/images/monster.png")}
          className="w-[50px] mx-auto py-5"
        />
        <div className="flex flex-wrap py-2">
          <div className="w-full self-center px-4 ">
            <h4 className="text-base font-semibold text-dark md:text-xl text-center ">
              Silahkan Upload Postingan Blog Kamu
            </h4>
            <p className="font-medium text-slate-500 mb-10 leading-relaxed text-center">
              Gunakan fitur ini dengan berisikan kontent yang bagus
            </p>
            <div className="lg:w-[40%] w-none mx-auto">
              <Input
                label={"Judul Postingan"}
                placeholder="Judul Postingan Anda"
              />
              <Gap height={20} />
              <UploadImage />
              <Gap height={20} />
              <TextArea placeholder="Tulis Deskripsi Postingan..." />
              <Gap height={20} />
              <Button title={"Buat Postingan"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBlog;
