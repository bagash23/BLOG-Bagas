import React from "react";
import { Input, Gap, Button, Link } from "../../components/atoms";

const Register = () => {
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
              Daftar Akun Dulu Yuk 😁
            </h4>
            <p className="font-medium text-slate-500 mb-10 leading-relaxed text-center">
              Silahkan isi data diri kamu dengan benar
            </p>
            <div className="md:w-[40%] w-none mx-auto">
              <Input label={"Nama Lengkep"} placeholder="Nama Lengkap" />
              <Gap height={20} />
              <Input label={"Email"} placeholder="Email" />
              <Gap height={20} />
              <Input label={"Kata Sandi"} placeholder="Kata Sandi" />
              <Gap height={20} />
              <Button title={"Daftar Akun"} />
              <Gap height={12} />
              <Link title="Sudah punya akun? Login" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
