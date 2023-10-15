const Instagram = () => {
  const images = [
    { id: 1, url: "https://i.ibb.co/D5Qgx4c/Rectangle-16.png" },
    { id: 2, url: "https://i.ibb.co/cbpnYNP/Rectangle-9.png" },
    { id: 3, url: "https://i.ibb.co/bdybZBP/Rectangle-15.png" },
    { id: 4, url: "https://i.ibb.co/r39zvcw/Rectangle-14.png" },
    { id: 5, url: "https://i.ibb.co/Jr8TT31/Rectangle-13.png" },
    { id: 6, url: "https://i.ibb.co/MV7Bxzc/Rectangle-12.png" },
    { id: 7, url: "https://i.ibb.co/jR1D1gP/Rectangle-10.png" },
    { id: 8, url: "https://i.ibb.co/TRqK38X/Rectangle-11.png" },
  ];
  return (
    <div>
      <div className="container mx-auto pb-32 px-4">
        <div className="flex flex-col items-center gap-6 py-8">
          <span className="block text-xl text-dark text-center -mb-1">
            Follow Us Now
          </span>
          <h2 className="font-Rancho text-5xl text-primary text-center drop-shadow-md">
            Follow on Instagram
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((item) => (
            <img className="w-full" key={item.id} src={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
