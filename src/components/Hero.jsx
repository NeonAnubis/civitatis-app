export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Hero background */}
      <div
        className="relative h-[480px] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/roma.avif')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <p className="uppercase tracking-[3px] text-sm mb-3 font-medium">Llena tu viaje</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8 max-w-2xl">
            Visitas guiadas, entradas y<br />
            experiencias en todo el mundo
          </h1>

          {/* Search bar */}
          <div className="flex items-center bg-white rounded-full shadow-lg max-w-xl mx-auto overflow-hidden">
            <div className="flex items-center flex-1 px-5 py-3">
              <svg className="w-5 h-5 text-gray-400 mr-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="¿A dónde vas a viajar?"
                className="w-full text-gray-600 text-sm outline-none bg-transparent"
              />
            </div>
            <button className="bg-civitatis-pink text-white px-6 py-3 text-sm font-semibold flex items-center gap-2 hover:bg-civitatis-pink-dark transition-colors rounded-full m-1">
              Buscar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Features bar */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-5xl mx-auto flex justify-around items-center px-8">
          <FeatureItem
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            text="Precios imbatibles"
          />
          <FeatureItem
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            }
            text="Atención al cliente 24/7"
          />
          <FeatureItem
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
            text="Millones de opiniones"
          />
          <FeatureItem
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            text="Cancelación gratuita"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-civitatis-pink">
      {icon}
      <span className="text-gray-600 text-sm font-medium">{text}</span>
    </div>
  );
}
