import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const Banks = () => {
  const [copySuccess, setCopySuccess] = useState("");

  // Fungsi untuk menyalin teks ke clipboard dengan fallback
  const copyToClipboard = (text: string) => {
    // Cek apakah navigator.clipboard tersedia
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopySuccess("Copied!");
          setTimeout(() => setCopySuccess(""), 2000); // Menghilangkan pesan setelah 2 detik
        })
        .catch(() => {
          setCopySuccess("Failed to copy!");
        });
    } else {
      // Fallback menggunakan document.execCommand
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000); // Menghilangkan pesan setelah 2 detik
      } else {
        setCopySuccess("Failed to copy!");
      }
    }
  };

  return (
    <div className="text-secondary p-8">
      <h1 className="font1 text-3xl font-bold text-left mb-2">GIFTS</h1>
      <div className="h-1 bg-secondary w-full mb-4"></div>
      <p className="font1 text-center text-[8px] mb-8">
        "Kami sangat menghargai kehadiran dan doa restu Anda di hari istimewa
        kami. Kami menerima uang berupa transfer digital di bawah ini dengan
        senang hati."
      </p>
      <div className="flex justify-center gap-8 mb-8">
        <div className="bg-secondary flex flex-col items-center justify-center p-4">
          <img src="/images/bank/bjb.png" alt="" className="w-28 mb-2" />
          <p className="text-black text-center w-full">a.n Meilani</p>
          <p className="text-black text-center w-full">No.rek: 0138431290100</p>
          <button
            onClick={() => copyToClipboard("0138431290100")}
            className="mt-2 px-4 py-2 text-xs bg-transparent border-2 border-black text-black rounded hover:bg-black hover:text-white hover:opacity-70 transition duration-200"
            aria-label="Copy Bank BJB Account Number"
          >
            <FaCopy className="inline mr-2" />
            Copy
          </button>
        </div>
        <div className="bg-secondary flex flex-col items-center justify-center p-4">
          <img src="/images/bank/dana.png" alt="" className="w-24 mb-2" />
          <p className="text-black text-center w-full">a.n Meilani</p>
          <p className="text-black text-center w-full">081286181363</p>
          <button
            onClick={() => copyToClipboard("081286181363")}
            className="mt-2 px-4 py-2 text-xs bg-transparent border-2 border-black text-black rounded hover:bg-black hover:text-white hover:opacity-70 transition duration-200"
            aria-label="Copy Dana Account Number"
          >
            <FaCopy className="inline mr-2" />
            Copy
          </button>
        </div>
      </div>
      {copySuccess && (
        <span className="text-green-500 mt-2">{copySuccess}</span>
      )}
      <p
        className="font1 text-center text-xs mb-8"
        data-aos="fade-up"
        data-aos-duration="350"
        data-aos-anchor-placement="top-bottom"
      >
        Kami akan sangat senang dan merasa terhormat jika Bapak/Ibu/Saudara/i
        bisa hadir di hari bahagia kami. Doa dan dukungan dari Anda akan menjadi
        pelengkap kebahagiaan kami. Terima kasih banyak atas waktu dan perhatian
        yang diberikan.
      </p>
      <p
        className="font2 text-center text-2xl font-semibold mb-4"
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-anchor-placement="top-bottom"
      >
        Wassalamualaikum Wr. Wb
      </p>
      <p
        className="font2 text-center text-xl font-bold mb-16"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        WISNU & MEILANI
      </p>
    </div>
  );
};

export default Banks;
