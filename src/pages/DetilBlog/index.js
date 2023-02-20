import React from "react";

const DetilBlog = () => {
  return (
    <section className="pt-36 pb-16">
      <div className="container">
        <h4 className="font-semibold md:text-2xl text-lg text-dark mb-3">
          Mengenal Apa itu Firebase, Fungsi, Fitur dan Cara Menggunakannya
        </h4>
        <img
          src="https://www.sekawanmedia.co.id/wp-content/uploads/2023/01/Layanan-Google-firebase.webp"
          alt="detil-image"
          className="
        max-w-[80%] "
        />
        <p className="font-medium md:text-xl text-md text-dark leading-relaxed mt-3">
          Firebase adalah layanan yang disediakan oleh Google untuk membantu
          developer mengembangkan aplikasi. Terdapat beberapa fitur pada layanan
          ini yaitu Firebase Analytic, Cloud Messaging dan Notification,
          Authentication dan Hosting.
        </p>
      </div>
    </section>
  );
};

export default DetilBlog;
