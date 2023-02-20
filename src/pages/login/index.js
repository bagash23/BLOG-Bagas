import React from "react";
import { Input, Gap, Button, Link } from "../../components/atoms";
import { useHistory } from "react-router-dom";
const Login = () => {
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
              Selamat Datang Kembali 👋
            </h4>
            <p className="font-medium text-slate-500 mb-10 leading-relaxed text-center">
              Silahkan masukan data kamu dengan benar
            </p>
            <div className="lg:w-[40%] w-none mx-auto">
              <Input label={"Email"} placeholder="Email" />
              <Gap height={20} />
              <Input label={"Kata Sandi"} placeholder="Kata Sandi" />
              <Gap height={20} />
              <Button title={"Masuk"} onClick={() => history.push("/")} />
              <Gap height={12} />
              <Link
                title="Belum punya akun? Daftar"
                onClick={() => history.push("/register")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
