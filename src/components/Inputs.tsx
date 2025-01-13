import { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FaCheck, FaCircle } from "react-icons/fa";

const Inputs = ({ name }: { name: string }) => {
  const [message, setMessage] = useState("");
  const [selectedPresence, setSelectedPresence] = useState("");
  const [allSubmissions, setAllSubmissions] = useState<
    { name: string; presence: string; message: string }[]
  >([]);

  useEffect(() => {
    const storedSubmissions = localStorage.getItem("submissions");
    if (storedSubmissions) {
      setAllSubmissions(JSON.parse(storedSubmissions));
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newSubmission = {
      name,
      presence: selectedPresence,
      message,
    };

    const updatedSubmissions = [...allSubmissions, newSubmission];
    setAllSubmissions(updatedSubmissions);
    localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));

    setMessage("");
    setSelectedPresence("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Form Input */}
      <form onSubmit={handleSubmit} className="px-8 mb-10 mt-5 w-full max-w-md">
        <p className="font-bold text-4xl text-secondary text-center">
          Konfirmasi Kehadiran
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <div className="text-lg text-secondary">
            Nama: <span className="font-semibold">{name}</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-secondary">Pesan Ucapan:</p>
            <TextareaAutosize
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              minRows={3}
              className="resize-none border-2 rounded-lg p-2 border-black bg-secondary text-black"
              required
            />
          </div>
          <div className="flex flex-col gap-3 my-4">
            {["Ya, saya akan hadir", "Maaf, saya tidak bisa datang"].map(
              (presence, index) => (
                <div key={index} className="flex gap-2 items-center">
                  {selectedPresence === presence ? (
                    <FaCheck size={18} className="text-green-500" />
                  ) : (
                    <FaCircle
                      size={18}
                      className="text-gray-400 cursor-pointer hover:text-gray-600 transition duration-300"
                      onClick={() => setSelectedPresence(presence)}
                    />
                  )}
                  <label
                    className="cursor-pointer"
                    onClick={() => setSelectedPresence(presence)}
                  >
                    {presence}
                  </label>
                </div>
              )
            )}
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-lg py-3 font-semibold text-center hover:bg-gray-800 transition duration-300 disabled:bg-opacity-50"
            disabled={!message || !selectedPresence}
          >
            Konfirmasi
          </button>
        </div>
      </form>

      {/* Daftar Konfirmasi */}
      <div className="w-[90%] max-w-md p-4 bg-secondary rounded-lg shadow-lg">
        <h2 className="font1 text-lg font-bold text-center mb-4">
          Daftar Konfirmasi
        </h2>
        <div className="max-h-48 overflow-y-auto border rounded-md p-2 bg-white shadow-inner">
          {allSubmissions.length > 0 ? (
            allSubmissions.map((submission, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 mb-2 p-2 border-b last:border-none"
              >
                <p className="text-sm font-semibold text-gray-700">
                  Nama: {submission.name}
                </p>
                <p className="text-sm text-gray-600">
                  Kehadiran: {submission.presence}
                </p>
                <p className="text-sm text-gray-600">
                  Pesan: {submission.message}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-center text-gray-500">
              Belum ada konfirmasi.
            </p>
          )}
        </div>
      </div>

      {/* Quotes QS Ar-Rum */}
      <div className="w-[90%] font2 max-w-md mt-4 p-4 bg-secondary rounded-lg shadow-md text-center">
        <p className="text-sm italic font-semibold text-black">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa
          tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berpikir."
        </p>
        <p className="text-sm mt-2 font-bold text-black">— QS. Ar-Rum: 21</p>
      </div>
    </div>
  );
};

export default Inputs;
