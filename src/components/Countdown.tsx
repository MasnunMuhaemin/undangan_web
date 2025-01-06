import Countdown from "react-countdown-simple";

const WeddingCountdown = () => {
  let targetDate = new Date("2025-01-19T08:00:00+07:00").toISOString();
  return (
    <div className="font1 relative bg-secondary text-center text-black py-8 w-full">
      {/* Gambar di atas background */}
      <div className="absolute top-[-75px] left-1/2 transform -translate-x-1/2 flex">
        {/* Flower 1 */}
        <div className="w-28 relative left-12 rotate-[4deg]">
          <img src="/images/flower/flowerflip4.png" alt="Flower 1" />
        </div>
        {/* Flower 2 */}
        <div className="w-64 mx-2 relative top-[-20px]">
          <img src="/images/flower/flower1.png" alt="Flower 2" />
        </div>
        {/* Flower 3 */}
        <div className="w-28 relative right-12 rotate-[10deg]">
          <img src="/images/flower/flower4.png" alt="Flower 3" />
        </div>
      </div>
      {/* Title */}
      <h1 className="text-2xl font-bold mt-2">HARI YANG KAMI NANTI</h1>
      {/* Description */}
      <p className="mt-4 text-[7px] mx-auto px-4">
        Dengan penuh syukur, kami percaya bahwa Allah telah mempertemukan kami
        di waktu terbaik. Kini, kami dengan penuh bahagia menanti hari istimewa,
        saat janji suci akan terucap dan langkah baru kami dimulai bersama.
      </p>

      {/* Countdown Timer */}
      <Countdown
        targetDate={targetDate}
        renderer={({ days, hours, minutes, seconds }) => {
          return (
            <div className="flex justify-center items-center mt-6 text-3xl font-bold">
              {/* Hari */}
              <div className="text-center mx-3">
                <span className="block">{days}</span>
                <span className="text-sm font-medium">hari</span>
              </div>

              {/* Separator */}
              <div className="flex items-center mb-10 text-2xl font-bold">
                :
              </div>

              {/* Jam */}
              <div className="text-center mx-3">
                <span className="block">{hours}</span>
                <span className="text-sm font-medium">jam</span>
              </div>

              {/* Separator */}
              <div className="flex items-center mb-10 text-2xl font-bold">
                :
              </div>

              {/* Menit */}
              <div className="text-center mx-3">
                <span className="block">{minutes}</span>
                <span className="text-sm font-medium">menit</span>
              </div>

              {/* Separator */}
              <div className="flex items-center mb-10 text-2xl font-bold">
                :
              </div>

              {/* Detik */}
              <div className="text-center mx-3">
                <span className="block">{seconds}</span>
                <span className="text-sm font-medium">detik</span>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default WeddingCountdown;
