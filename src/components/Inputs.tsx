import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FaCheck, FaCircle } from "react-icons/fa";

const Inputs = ({ name }: { name: string }) => {
  const [message, setMessage] = useState("");
  const [selectedPresence, setSelectedPresence] = useState("");

  const presences = [
    {
      detail: "Ya, saya akan hadir",
    },
    {
      detail: "Maaf, saya tidak bisa datang",
    },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const phone = "+62859121393437";
    const template = `Hai, saya ${name} ingin konfirmasi pada undangan digital bahwa ${selectedPresence}. Saya ucapkan ${message}`;
    const api =
      "https://api.whatsapp.com/send?phone=" + phone + "&text=" + template;
    window.location.href = api;
  };
  return (
    <form onSubmit={handleSubmit} className="px-8 mb-10 mt-5">
      <p className="text-4xl lg:text-header md:text-header font-bold text-secondary">
        Konfirmasi Kehadiran
      </p>
      <div className=" h-[1.5px] bg-s late-500 rounded-full mb-5" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center text-xl">
          <p className="text-lg text-secondary">Nama: {name}</p>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-lg text-secondary">Pesan Ucapan:</p>
          <TextareaAutosize
            onChange={(event) => setMessage(event.target.value)}
            minRows={3}
            className="resize-none border-2 rounded-lg p-2 border-black bg-secondary text-black"
            required
          />
        </div>
        <div className="flex flex-col gap-3 my-4">
          {presences.map((presence, index) => (
            <div key={index} className="flex gap-2 items-center">
              {selectedPresence === presence.detail ? (
                <FaCheck size={18} className="text-green-500" />
              ) : (
                <FaCircle
                  size={18}
                  className="text-gray-400 cursor-pointer hover:text-gray-600 transition duration-300"
                  onClick={() => setSelectedPresence(presence.detail)}
                />
              )}
              <label
                htmlFor={presence.detail}
                className="cursor-pointer"
                onClick={() => setSelectedPresence(presence.detail)}
              >
                {presence.detail}
              </label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-black rounded-lg py-3 font-semibold tracking-wide text-white flex items-center justify-center disabled:bg-opacity-50"
          disabled={!message.length || !selectedPresence.length}
        >
          Konfirmasi
        </button>
      </div>
    </form>
  );
};

export default Inputs;
