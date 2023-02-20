import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const dummyBlog = [
    {
      id: 1,
      title: "Mengenal Apa itu Firebase, Fungsi, Fitur dan Cara Menggunakannya",
      url: "https://www.sekawanmedia.co.id/wp-content/uploads/2023/01/Layanan-Google-firebase.webp",
      singkat:
        "Firebase adalah layanan yang disediakan oleh Google untuk membantu developer mengembangkan aplikasi. Terdapat beberapa fitur pada layanan ini yaitu Firebase Analytic, Cloud Messaging dan Notification, Authentication dan Hosting.",
    },
    {
      id: 2,
      title: "Apa Itu Composer? Fungsi, Cara Kerja dan Cara Penggunaan",
      url: "https://www.sekawanmedia.co.id/wp-content/uploads/2023/01/mengenal-composer.webp",
      singkat:
        "Firebase adalah layanan yang disediakan oleh Google untuk membantu developer mengembangkan aplikasi. Terdapat beberapa fitur pada layanan ini yaitu Firebase Analytic, Cloud Messaging dan Notification, Authentication dan Hosting.",
    },
    {
      id: 3,
      title: "Mengenal Apa itu Firebase, Fungsi, Fitur dan Cara Menggunakannya",
      url: "https://www.sekawanmedia.co.id/wp-content/uploads/2023/01/Layanan-Google-firebase.webp",
      singkat:
        "Firebase adalah layanan yang disediakan oleh Google untuk membantu developer mengembangkan aplikasi. Terdapat beberapa fitur pada layanan ini yaitu Firebase Analytic, Cloud Messaging dan Notification, Authentication dan Hosting.",
    },
    {
      id: 4,
      title: "Apa Itu Composer? Fungsi, Cara Kerja dan Cara Penggunaan",
      url: "https://www.sekawanmedia.co.id/wp-content/uploads/2023/01/mengenal-composer.webp",
      singkat:
        "Firebase adalah layanan yang disediakan oleh Google untuk membantu developer mengembangkan aplikasi. Terdapat beberapa fitur pada layanan ini yaitu Firebase Analytic, Cloud Messaging dan Notification, Authentication dan Hosting.",
    },
  ];

  return (
    <>
      <section id="home" className="pt-36 pb-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Halo Bagas Haryadi 😁, Selamat Datang Di
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                  Blog Bagas
                </span>
              </h1>
              <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
                <span className="text-dark">
                  Website Informasi Seputar Dunia IT
                </span>
              </h2>
              <p className="font-medium text-slate-400 mb-10 leading-relaxed">
                Membahas seputar dunia IT khususnya bagi kalian yang binggung
                atau
                <span className="text-dark font-semibold"> GAPTEK</span> dengan
                dunia IT. Semoga website ini membantu anda untuk mendapatkan
                informasi tentang dunia IT
              </p>
              <a
                href="https://drive.google.com/file/d/1gW2Q6kR4N-RsJ4h7Tp_JCYK0ZpZKtYrR/view?usp=sharing"
                className="text-base font-semibold text-white bg-[#FF0032] py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Donasi Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Blog Bagas
              </h4>
              <h2
                className="font-bold text-dark text-3xl mb-4"
                data-aos="fade-up"
              >
                Seputar Dunia IT
              </h2>
              <p
                className="font-medium text-md text-slate-500"
                data-aos="fade-up"
              >
                Semua kita bahas disini semoga artikel ini membantu anda untuk
                menemukan sesuatu dimohon untuk digunakan sebaik mungkin
                <br />
                <span className="font-bold text-dark">
                  Tidak Ada Yang Gampang Di Dunia Ini
                </span>
              </p>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center">
            {dummyBlog.map((item, index) => {
              return (
                <a
                  href={`/detil-blog/${item.id}`}
                  key={index}
                  className="mb-12 p-4 md:w-1/2 cursor-pointer hover:rounded-lg hover:scale-75 ease-in duration-500"
                >
                  <div className="rounded-md shadow-md overflow-hidden px-4 py-2 bg-white lg:flex lg:w-full">
                    <img
                      src={item.url}
                      alt="img-blog"
                      className="max-w-full lg:w-[40%] mx-auto "
                    />
                    <div className="block lg:mx-2">
                      <h3 className="font-semibold text-[20px] text-dark mb-3">
                        {item.title}
                      </h3>
                      <p className="font-medium text-[12px] text-slate-500 leading-relaxed mb-3">
                        {item.singkat}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
