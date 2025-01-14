import { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FaCheck, FaCircle } from "react-icons/fa";
import axios from "axios";

interface Pesan {
  name: string;
  pesan: string;
  presence: string;
}

const Inputs = ({ name }: { name: string }) => {
  const [pesan, setPesan] = useState<Pesan[]>([]); 
  const [pesanInput, setPesanInput] = useState<string>(""); 
  const [selectedPresence, setSelectedPresence] = useState<string>(""); // Menyimpan nilai '1' atau '0'

  useEffect(() => {
    axios
      .get<{ data: Pesan[] }>("https://alope.id/wedding.php/api/pesan")
      .then((response) => {
        setPesan(response.data.data); 
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: Pesan = {
      name,
      pesan: pesanInput,
      presence: selectedPresence, // Kirim '1' atau '0' ke API
    };

    axios
      .post<{ data: Pesan }>("https://alope.id/wedding.php/api/pesan", data)
      .then((response) => {
        setPesan((prev) => [...prev, response.data.data]); 
        setPesanInput(""); 
        setSelectedPresence(""); 
      })
      .catch((err) => {
        console.error("Error posting data:", err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="px-8 mb-10 mt-5 w-full max-w-md">
        <p className="font-bold text-4xl text-secondary text-left">
          Konfirmasi Kehadiran
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <div className="text-lg text-secondary">
            Nama: <span className="font-semibold">{name}</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-secondary">Pesan Ucapan:</p>
            <TextareaAutosize
              value={pesanInput}
              onChange={(event) => setPesanInput(event.target.value)}
              minRows={3}
              className="resize-none border-2 rounded-lg p-2 border-black bg-secondary text-black"
              required
            />
          </div>
          <div className="flex flex-col gap-3 my-4">
            {/* Menambahkan pilihan kehadiran dengan nilai '1' dan '0' */}
            {[
              { label: "Ya, saya akan hadir", value: "1" },
              { label: "Maaf, saya tidak bisa datang", value: "0" }
            ].map((presence) => (
              <div key={presence.value} className="flex gap-2 items-center">
                {selectedPresence === presence.value ? (
                  <FaCheck size={18} className="text-green-500" />
                ) : (
                  <FaCircle
                    size={18}
                    className="text-gray-400 cursor-pointer hover:text-gray-600 transition duration-300"
                    onClick={() => setSelectedPresence(presence.value)}
                  />
                )}
                <label
                  className="cursor-pointer"
                  onClick={() => setSelectedPresence(presence.value)}
                >
                  {presence.label}
                </label>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-lg py-3 font-semibold text-center hover:bg-gray-800 transition duration-300 disabled:bg-opacity-50"
            disabled={!pesanInput || !selectedPresence}
          >
            Konfirmasi
          </button>
        </div>
      </form>

      <div className="w-[90%] max-w-md p-4 bg-secondary rounded-lg shadow-lg">
        <h2 className="font1 text-lg font-bold text-center mb-4">
          Daftar Konfirmasi
        </h2>
        <div className="max-h-48 overflow-y-auto border rounded-md p-2 bg-white shadow-inner">
          {pesan.length > 0 ? (
            pesan.map((pesan, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 mb-2 p-2 border-b last:border-none"
              >
                <p className="text-sm font-semibold text-gray-700">
                  Nama: {pesan.name}
                </p>
                <p className="text-sm text-gray-600">
                  Kehadiran: {pesan.presence === "1" ? "Ya, saya akan hadir" : "Maaf, saya tidak bisa datang"}
                </p>
                <p className="text-sm text-gray-600">Pesan: {pesan.pesan}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-center text-gray-500">
              Belum ada konfirmasi.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inputs;
