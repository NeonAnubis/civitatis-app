const activities = [
  {
    title: "Visita guiada por los Museos Vaticanos y la Capilla Sixtina",
    image: "/assets/visita-guiada-vaticano-grid.avif",
    price: "US$ 68.70",
    originalPrice: "US$ 72.30",
    rating: "8.90",
    reviews: "54,458",
    description: "Disfruta de una <b>visita guiada por los Museos Vaticanos</b> y la <b>Capilla Sixtina</b>, una de las atracciones más icónicas de Roma, con <b>entrada sin colas</b>.",
  },
  {
    title: "Tour por el Coliseo, el Foro Romano y el Palatino",
    image: "/assets/visita-guiada-roma-antigua-grid.avif",
    price: "US$ 60.88",
    originalPrice: "US$ 64.10",
    rating: "9.40",
    reviews: "47,401",
    description: "Descubre el <b>Coliseo, el Foro Romano</b> y el <b>Palatino</b> en esta visita guiada por los monumentos más importantes de la antigua Roma.",
  },
  {
    title: "Excursión al Caminito del Rey",
    image: "/assets/contrastes-nueva-york-vip-grid.avif",
    price: "US$ 76.53",
    originalPrice: null,
    rating: "9.30",
    reviews: "2,082",
    description: "Recorre el impresionante <b>Caminito del Rey</b>, un espectacular sendero colgado en las paredes del <b>Desfiladero de los Gaitanes</b>.",
  },
  {
    title: "Entradas a las Setas de Sevilla",
    image: "/assets/tour-alhambra-palacios-nazaries-grid.avif",
    price: "US$ 18.55",
    originalPrice: null,
    rating: "8.80",
    reviews: "880",
    description: "Consigue tus entradas a las <b>Setas de Sevilla</b> y disfruta de vistas panorámicas de la ciudad desde esta icónica <b>estructura de madera</b> en el corazón de Sevilla.",
  },
  {
    title: "Visita guiada por el Caminito del Rey",
    image: "/assets/excursion-auschwitz-birkenau-grid.avif",
    price: "US$ 45.22",
    originalPrice: null,
    rating: "9",
    reviews: "788",
    description: "Explora el <b>Caminito del Rey</b> con un guía experto que compartirá la fascinante <b>historia y geología</b> de este extraordinario sendero.",
  },
  {
    title: "Tour subterráneo de Toledo",
    image: "/assets/tour-coliseo-arena-gladiadores-grid.avif",
    price: "US$ 13.91",
    originalPrice: null,
    rating: null,
    reviews: null,
    isNew: true,
    description: "Descubre los <b>pasadizos subterráneos ocultos</b> de Toledo en este tour único por el <b>misterioso mundo subterráneo</b> de la ciudad.",
  },
  {
    title: "Free tour por París",
    image: "/assets/paseo-barco-sena-grid.avif",
    price: "¡Gratis!",
    originalPrice: null,
    rating: "9.30",
    reviews: "868",
    isFree: true,
    description: "Explora lo mejor de <b>París a pie</b> con un guía local experto en este <b>free tour</b> por los monumentos más icónicos de la ciudad.",
  },
  {
    title: "Visita guiada por la Sagrada Familia",
    image: "/assets/paseo-barco-noche-budapest-grid.avif",
    price: "US$ 63.77",
    originalPrice: null,
    rating: "8.60",
    reviews: "4,006",
    description: "Disfruta de una <b>visita guiada por la mundialmente conocida Sagrada Familia</b>, la atracción más visitada de Barcelona, y conoce la obra maestra de Gaudí con <b>entrada sin colas</b>.",
  },
  {
    title: "Entrada a SUMMIT One Vanderbilt",
    image: "/assets/excursion-zaanse-schans-volendam-marken-grid.avif",
    price: "US$ 46.82",
    originalPrice: null,
    rating: "8.80",
    reviews: "6,014",
    priceLabel: "desde",
    description: "Vive la experiencia de <b>SUMMIT One Vanderbilt</b>, un mirador inmersivo que ofrece impresionantes <b>vistas del horizonte de Manhattan</b>.",
  },
];

function StarRating({ rating }) {
  const numRating = parseFloat(rating);
  const fullStars = Math.floor(numRating / 2);
  const hasHalf = (numRating / 2) - fullStars >= 0.25;
  return (
    <span className="inline-flex text-civitatis-star ml-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
          {i < fullStars ? (
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          ) : i === fullStars && hasHalf ? (
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" opacity="0.4" />
          ) : (
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" opacity="0.2" />
          )}
        </svg>
      ))}
    </span>
  );
}

export default function TrendingActivities() {
  return (
    <section className="py-12 px-8 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
        Actividades en tendencia
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden h-72 block cursor-pointer shadow-sm border border-gray-100"
          >
            {/* Default card content */}
            <div className="absolute inset-0 flex flex-col bg-white group-hover:opacity-0 transition-opacity duration-300">
              <div className="h-44 overflow-hidden shrink-0">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-3 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="text-base font-bold text-civitatis-pink leading-snug">
                    {activity.title}
                  </h3>
                  <div className="text-right shrink-0">
                    {activity.originalPrice && (
                      <p className="text-xs text-gray-400 line-through">{activity.originalPrice}</p>
                    )}
                    {activity.priceLabel && (
                      <p className="text-xs text-gray-400">{activity.priceLabel}</p>
                    )}
                    <p className={`text-base font-bold ${activity.isFree ? 'text-civitatis-pink' : 'text-gray-800'}`}>
                      {activity.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-2">
                  {activity.isNew ? (
                    <span className="text-civitatis-pink font-medium">Nuevo</span>
                  ) : activity.rating ? (
                    <>
                      <span className="text-civitatis-pink font-bold">{activity.rating} / 10</span>
                      <span className="text-gray-400">{activity.reviews} opiniones</span>
                    </>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-civitatis-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-start px-5 py-5 overflow-hidden">
              <div className="hover-slide-up">
                <h3 className="text-base font-bold text-white mb-3">
                  {activity.title}
                </h3>
                {activity.rating && (
                  <div className="flex items-center mb-3">
                    <span className="text-3xl font-bold text-white mr-2">{activity.rating}</span>
                    <StarRating rating={activity.rating} />
                    <span className="text-xs text-white/70 ml-2">{activity.reviews} opiniones</span>
                  </div>
                )}
                {activity.isNew && (
                  <div className="mb-3">
                    <span className="text-sm text-white font-semibold">Nuevo</span>
                  </div>
                )}
                <p
                  className="text-sm text-white/80 leading-relaxed [&>b]:text-white [&>b]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: activity.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
