import Countdown from "react-countdown-simple";

const SubHeader = () => {
  let targetDate = new Date("2025-01-19T08:00:00+07:00").toISOString();

  return (
    <div className="">
      <div className="relative">
        <div className="absolute -top-20 left-0 w-full h-20 bg-gradient-to-t from-primary from-10% via-primary/30 via-60% to-transparent to-90%"></div>
        {/* Judul Utama */}
        <h3 className="font1 text-xs md:text-lg lg:text-lg ml-2 md:ml-6 lg:ml-10 mb-4 mt-2">
          The Wedding Of
        </h3>
        <h1 className="font2 text-2xl md:text-4xl lg:text-5xl ml-2 md:ml-6 lg:ml-10 mb-4">
          WISNU & MEILANI
        </h1>
        <h3 className="font1 text-xs md:text-lg lg:text-lg ml-2 md:ml-6 lg:ml-10 mb-4">
          We invite you to celebrate our wedding
        </h3>
        {/* Countdown Timer */}
        <Countdown
          targetDate={targetDate}
          renderer={({ days, hours, minutes, seconds }) => {
            return (
              <div className="font1 relative flex justify-center items-center mt-6 text-xl md:text-3xl lg:text-4xl font-bold text-white">
                {/* Hari */}
                <div className="text-center mx-3">
                  <span className="block text-lg md:text-2xl lg:text-3xl">
                    {days}
                  </span>
                  <span className="text-xs md:text-sm lg:text-base font-medium">
                    hari
                  </span>
                </div>

                {/* Separator */}
                <div className="flex items-center mb-10 text-xl md:text-3xl lg:text-4xl font-bold">
                  :
                </div>

                {/* Jam */}
                <div className="text-center mx-3">
                  <span className="block text-lg md:text-2xl lg:text-3xl">
                    {hours}
                  </span>
                  <span className="text-xs md:text-sm lg:text-base font-medium">
                    jam
                  </span>
                </div>

                {/* Separator */}
                <div className="flex items-center mb-10 text-xl md:text-3xl lg:text-4xl font-bold">
                  :
                </div>

                {/* Menit */}
                <div className="text-center mx-3">
                  <span className="block text-lg md:text-2xl lg:text-3xl">
                    {minutes}
                  </span>
                  <span className="text-xs md:text-sm lg:text-base font-medium">
                    menit
                  </span>
                </div>

                {/* Separator */}
                <div className="flex items-center mb-10 text-xl md:text-3xl lg:text-4xl font-bold">
                  :
                </div>

                {/* Detik */}
                <div className="text-center mx-3">
                  <span className="block text-lg md:text-2xl lg:text-3xl">
                    {seconds}
                  </span>
                  <span className="text-xs md:text-sm lg:text-base font-medium">
                    detik
                  </span>
                </div>
              </div>
            );
          }}
        />

        {/* Informasi Tanggal */}
        {/* Teks */}
        <div className="bg-tertiary text-center text-black px-2 py-1 ml-2 md:ml-6 lg:ml-10 md:px-5 md:py-3 text-xs md:text-base lg:text-lg rounded-full w-fit">
          <p>Minggu 19 Januari 2025</p>
        </div>

        {/* Gambar */}
        <div
          className="absolute -bottom-2 right-0 flex items-center"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-duration="800"
        >
          <img
            src="/images/flower/flower2.png"
            alt="Mirror Flower"
            className="w-28 sm:w-20 md:w-24 lg:w-28 transform scale-x-[-1]"
          />
        </div>
      </div>
      <div className="font1 bg-secondary mt-1 text-center h-24 flex justify-center items-center">
        <p
          className="tagline text-2xl"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          We're Getting Married
        </p>
      </div>
    </div>
  );
};

export default SubHeader;
