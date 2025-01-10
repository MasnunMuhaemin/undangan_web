import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Tambahkan ini untuk mengakses URL
import invitations from "../lib/data.json";
import { FaBookOpen } from "react-icons/fa6";

export default function Modal({ audio }: { audio: HTMLAudioElement }) {
  const [open, setOpen] = useState(true);
  const location = useLocation(); // Ambil lokasi dari URL

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      audio && audio.play();
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [open, setOpen]);

  const queryParams = new URLSearchParams(location.search);
  const nameFromUrl = queryParams.get("name");

  const invitedPerson = invitations.find(
    (item) => item.name.toLowerCase() === (nameFromUrl?.toLowerCase() || "")
  );

  return (
    <div
      className={`fixed inset-0 transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div className="absolute inset-0 bg-center bg-no-repeat bg-black opacity-[.75] z-0"></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[image:url('/images/wedding/img16.jpeg')] md:bg-[image:url('/images/wedding/modal.jpeg')] bg-cover z-10 bg-center bg-no-repeat shadow p-6 transition-all duration-500 w-full h-full ${
          open ? "opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="relative md:right-0 top-0 px-0 h-full text-center flex flex-col items-center justify-center">
          <div className="flex gap-10 items-center justify-center">
            <svg
              data-aos="fade"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 800 400"
            >
              <path
                d="M69.50672912597656,143.4977569580078C105.97907765706381,159.1928253173828,210.76234181722003,236.6218287150065,288.3408203125,237.6681671142578C365.91929880777997,238.71450551350912,457.84755452473956,148.72945149739584,534.9776000976562,149.77578735351562C612.1076456705729,150.8221232096354,715.097178141276,228.25111643473306,751.12109375,243.94618225097656"
                fill="none"
                stroke-width="25"
                stroke="#66474a"
                stroke-linecap="round"
                transform="matrix(1.0708588703410085,-0.15913510008938964,-0.5771679777921226,0.846380376552997,82.7357366602252,95.0548426029116)"
              ></path>
              <defs>
                <linearGradient id="SvgjsLinearGradient1002">
                  <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
                  <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p
            className="font1 text-[xs] mb-3 sm:font-bold sm:text-2xl md:text-2xl"
            data-aos="fade"
            data-aos-delay="500"
          >
            THE WEDDING OF
          </p>

          <div className="font2 items-center mt-3 mb-8 font-extrabold">
            <div className="font-satisfy text-3xl md:text-5xl lg:text-6xl mt-5 mb-4 gap-5">
              <p data-aos="fade" data-aos-delay="700">
                WISNU & MEILANI
              </p>
            </div>

            <p className="text-lg font-semibold mb-3">Dear,</p>
            {invitedPerson ? (
              <p className="text-xl font-bold">{invitedPerson.name}</p>
            ) : (
              <p className="text-xl font-bold text-red-500">
                Undangan tidak ditemukan
              </p>
            )}
          </div>

          <div className="font1 transition-all hover:scale-110 group">
            <button
              data-aos="fade"
              data-aos-delay="1600"
              data-aos-offset="-100"
              onClick={() => setOpen(false)}
              className="bg-black bg-opacity-[.75] shadow-lg rounded-3xl py-3 px-5 font-semibold flex items-center justify-center gap-2 group"
            >
              <FaBookOpen />
              <span>Buka Undangan </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
