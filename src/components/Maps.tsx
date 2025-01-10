const Maps = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Container Utama */}
      <div className="w-[90%] max-w-3xl p-8 rounded-lg relative">
        {/* Dekorasi Bunga di Luar Konten */}
        <div className="absolute top-[-5rem] left-[-2rem] md:top-[-6rem] md:left-[-4rem] lg:top-[-8rem] lg:left-[-5rem]">
          <img
            src="/images/flower/flower2.png" // Ganti dengan path gambar bunga
            alt="Bunga"
            className="w-32 md:w-40 transform scale-y-[-1]"
          />
        </div>

        {/* Box Konten Utama */}
        <div
          className="relative border-8 border-double border-secondary rounded-lg p-6"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-offset="250"
        >
          {/* Dekorasi Bunga di Dalam Border */}
          <div className="absolute -top-4 -left-3 -z-10">
            <img
              src="/images/flower/flower2.png" // Ganti dengan path gambar bunga
              alt="Bunga dalam border"
              className="w-24 md:w-40 transform scale-y-[-1]"
            />
          </div>

          {/* Border dan Konten */}
          <div className="relative z-10">
            <h1 className="font2 text-3xl font-serif mb-6 text-center mt-10">
              Akad Nikah
            </h1>
            <div className="space-y-4 text-center text-xs font1">
              <p>Hari: Minggu, 19 Januari 2025</p>
              <p>Waktu: 07.00 WIB</p>
              <p>Tempat: Sumedang Jawa Barat</p>
            </div>
          </div>
        </div>

        {/* Lokasi */}
        <div className="mt-8 flex items-center">
          {/* Teks dan Panah di Kiri */}
          <div className="w-1/2 pr-4 flex flex-col justify-center">
            <h2
              className="font2 text-3xl font-serif"
              data-aos="fade-right"
              data-aos-delay="450"
            >
              LOKASI
            </h2>
            <p className="font1 mt-4 text-[10px]">
              Alamat lengkap: Dsn. Sampora rt 02 rw 06 Ds. Cibubuan,
              <br />
              Kec. Conggeang Kab. Sumedang
            </p>
            <div className="">
              <img
                src="/images/flower/arrow.png" // Ganti dengan path gambar panah
                alt="Panah"
                className="w-32 md:w-36 -rotate-[40deg]"
              />
            </div>
          </div>

          {/* Kotak Map di Kanan */}
          <div className="w-1/2 flex justify-center items-center">
            <div>
              <div className="h-24 w-40 md:w-52 rounded-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.336313521359!2d107.9923821!3d-6.7045066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e692b5ee4c8dc81%3A0xc4b0cc84d41599e0!2sRumah%20meilani!5e1!3m2!1sen!2sid!4v1736354957893!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-center text-[7px] font-extralight mt-2">
                Tempat: Sumedang, Jawa Barat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
