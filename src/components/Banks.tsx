import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const Banks = () => {
  const [copySuccess, setCopySuccess] = useState("");

  // Fungsi untuk menyalin teks ke clipboard dengan tipe parameter eksplisit
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000); // Menghilangkan pesan setelah 2 detik
    });
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
            className="mt-2 px-2 py-0.5 text-xs bg-transparent border-2 border-black text-black rounded hover:bg-black hover:text-white hover:opacity-70 transition duration-200"
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
            className="mt-2 px-2 py-0.5 text-xs bg-transparent border-2 border-black text-black rounded hover:bg-black hover:text-white hover:opacity-70 transition duration-200"
          >
            <FaCopy className="inline mr-2" />
            Copy
          </button>
        </div>
      </div>
      {copySuccess && (
        <span className="text-green-500 mt-2">{copySuccess}</span>
      )}
      <p className="font1 text-center text-xs mb-8">
        Kami akan sangat senang dan merasa terhormat jika Bapak/Ibu/Saudara/i
        bisa hadir di hari bahagia kami. Doa dan dukungan dari Anda akan menjadi
        pelengkap kebahagiaan kami. Terima kasih banyak atas waktu dan perhatian
        yang diberikan.
      </p>
      <p className="font2 text-center text-2xl font-semibold mb-4">
        Wassalamualaikum Wr. Wb
      </p>
      <p className="font2 text-center text-xl font-bold">WISNU & MEILANI</p>
    </div>
  );
};

export default Banks;
