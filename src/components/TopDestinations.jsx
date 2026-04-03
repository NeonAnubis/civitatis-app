const destinations = [
  { name: "Krakow", image: "/assets/cracovia-top.avif", activities: 59, reviews: "104,914", travelers: "2,258,882", rating: "9.00" },
  { name: "Garda", image: "/assets/garda-top.avif", activities: 23, reviews: "12,350", travelers: "385,210", rating: "8.70" },
  { name: "Ardales", image: "/assets/ardales-top.avif", activities: 8, reviews: "3,420", travelers: "98,540", rating: "9.20" },
  { name: "Puerto Rico", image: "/assets/puerto-rico-top.avif", activities: 45, reviews: "28,760", travelers: "1,125,400", rating: "8.90" },
  { name: "Málaga", image: "/assets/malaga-top.avif", activities: 67, reviews: "85,230", travelers: "3,450,120", rating: "9.10" },
  { name: "Lisbon", image: "/assets/lisboa-top.avif", activities: 82, reviews: "96,540", travelers: "4,120,890", rating: "9.30" },
];

export default function TopDestinations() {
  return (
    <section className="py-12 px-8 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
        Destinos más populares
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((dest) => (
          <a
            key={dest.name}
            href="#"
            className="group relative rounded-lg overflow-hidden h-52 block"
          >
            {/* Image */}
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            {/* Default gradient overlay with name */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold group-hover:opacity-0 transition-opacity duration-300">
              {dest.name}
            </h3>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-civitatis-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center px-6 py-5 text-white overflow-hidden">
              <div className="hover-slide-up">
              <h3 className="text-xl font-bold mb-4">{dest.name}</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                <div>
                  <p className="text-2xl font-bold leading-tight">{dest.activities}</p>
                  <p className="text-sm opacity-90">actividades</p>
                </div>
                <div>
                  <p className="text-2xl font-bold leading-tight">{dest.reviews}</p>
                  <p className="text-sm opacity-90">opiniones</p>
                </div>
                <div>
                  <p className="text-2xl font-bold leading-tight">{dest.travelers}</p>
                  <p className="text-sm opacity-90">viajeros</p>
                </div>
                <div>
                  <p className="text-2xl font-bold leading-tight">{dest.rating} / 10</p>
                  <p className="text-sm opacity-90">valoración</p>
                </div>
              </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="border border-civitatis-pink text-civitatis-pink rounded-full px-8 py-2.5 text-sm font-medium hover:bg-civitatis-pink hover:text-white transition-colors">
          Ver más
        </button>
      </div>
    </section>
  );
}
