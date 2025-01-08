const Content = () => {
  return (
    <div className="min-h-screen py-10 px-4">
      {/* Bagian Header */}
      <div className=" font1 text-center mb-10">
        <h1 className="font-cursive text-2xl md:text-5xl text-secondary">
          Assalamualaikum Wr. Wb
        </h1>
        <p className="mt-4 text-xs md:text-base leading-relaxed">
          Dengan penuh kerendahan hati dan rasa syukur ke hadirat Allah
          Subhanahu wa Ta'ala, kami memohon kehadiran Bapak/Ibu/Saudara/i serta
          kerabat sekalian untuk menghadiri acara pernikahan kami:
        </p>
      </div>

      {/* Bagian Konten */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Kartu Welly */}
        <div className="flex items-center gap-6 relative">
          <div>
            <img
              src="/images/wedding/card.png"
              alt="Welly"
              className="w-40 h-52 md:w-60 md:h-72 rounded-lg object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="font2 text-xl md:text-2xl font-bold">WELLY</h3>
            <p className="font1 text-xs md:text-base">
              PUTRI PERTAMA BAPA UDIN & IBU JAMI
            </p>
          </div>
          <div className="absolute top-0 -right-6 -translate-y-4 translate-x-4">
            <img
              src="/images/flower/flower4.png"
              alt="Flower Decoration"
              className="w-28 md:w-20 -rotate-[75deg]"
            />
          </div>
        </div>

        {/* Simbol & */}
        <div className="text-3xl md:text-5xl font1">&</div>

        {/* Kartu Tommi */}
        <div className="flex flex-row-reverse items-center relative">
          <div>
            <img
              src="/images/wedding/card.png"
              alt="Tommi"
              className="w-40 h-52 md:w-60 md:h-72 object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="font2 text-xl md:text-2xl font-bold relative">
              TOMMI
            </h3>
            <p className="font1 text-xs md:text-base">
              PUTRA PERTAMA BAPA UDIN & IBU JAMI
            </p>
          </div>
          <div className="absolute -top-10 -left-6 -translate-y-4 -translate-x-4">
            <img
              src="/images/flower/flower4.png"
              alt="Flower Decoration"
              className="w-28 md:w-20 rotate-[75deg]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
