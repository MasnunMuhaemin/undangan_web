import { useState } from "react";

const Gallery = () => {
  // Mendefinisikan tipe state loadedImages sebagai array dari angka
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  // Handle image load to trigger stack effect
  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  return (
    <div className="font2 relative text-center bg-secondary p-6">
      {/* Gambar di atas background */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex">
        {/* Flower 1 */}
        <div className="w-24 relative">
          <img
            src="/images/flower/flowerflip4.png"
            alt="Flower 1"
            className="absolute left-10"
          />
        </div>
        {/* Flower 2 */}
        <div className="w-64 relative mx-2">
          <img
            src="/images/flower/flower1.png"
            alt="Flower 2"
            className="absolute -top-5"
          />
        </div>
        {/* Flower 3 */}
        <div className="w-24 mt-2 relative rotate-[10deg]">
          <img
            src="/images/flower/flower4.png"
            alt="Flower 3"
            className="absolute right-9"
          />
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">GALLERY</h2>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
        {[...Array(26)].map((_, index) => {
          const imgNumber = (index % 26) + 1; // Gambar dari 1 hingga 5
          const imgSrc = `/images/wedding/img${imgNumber}.jpeg`; // Sumber gambar
          const sizeClasses =
            index % 7 === 0
              ? "col-span-2 row-span-2" // Foto besar
              : "col-span-1"; // Foto kecil default

          // Add transition delay for stack effect (delay per index)
          const delay = index * 100; // Delay in milliseconds (increase for more stack delay)

          return (
            <div
              key={index}
              className={`group relative rounded-md w-full h-full ${sizeClasses}`}
            >
              <img
                src={imgSrc}
                alt={`Gallery Image ${index + 1}`}
                className={`rounded-md w-full h-full object-cover opacity-0 transition-opacity duration-500 ${
                  loadedImages.includes(index) ? "opacity-100" : ""
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)} // Trigger image load and apply transition
                style={{
                  transitionDelay: `${delay}ms`, // Add delay for stack effect
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md" />
            </div>
          );
        })}
      </div>

      {/* Save the Date */}
      <div className="absolute bottom-6 right-6">
        <h2 className="text-xl md:text-2xl font-bold">
          SAVE THE DATE
        </h2>
      </div>
    </div>
  );
};

export default Gallery;
