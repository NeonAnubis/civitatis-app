export default function AppDownload() {
  return (
    <section className="relative max-w-5xl mx-auto px-8 my-12">
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #e4137a 0%, #a01a90 50%, #7b2db5 100%)",
        }}
      >
        {/* World map overlay with blur */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/assets/world_map.webp')", filter: "blur(1.5px)" }}
        ></div>

        <div className="relative z-10 flex flex-col md:flex-row items-stretch min-h-[210px]">
          {/* Left side: text + store buttons + QR */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2 italic">
              ¿Tienes en mente tu<br />próximo viaje?
            </h2>
            <p className="text-xs text-white/80 mb-5 max-w-xs">
              Descárgate la nueva app de Civitatis y empezamos a planearlo.
            </p>

            {/* Store buttons + QR code row */}
            <div className="flex items-center gap-4">
              {/* Store buttons stacked */}
              <div className="flex flex-col gap-2">
                {/* Apple Store */}
                <a
                  href="#"
                  className="flex items-center gap-2.5 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors w-40"
                >
                  <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <p className="text-[9px] uppercase tracking-wide leading-none">Disponible en</p>
                    <p className="text-xs font-semibold leading-tight">Apple Store</p>
                  </div>
                </a>
                {/* Google Play */}
                <a
                  href="#"
                  className="flex items-center gap-2.5 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors w-40"
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594z" />
                    <path fill="#34A853" d="M5.255 21.795l9.329-5.275-3.019-2.997-6.31 6.272a1.49 1.49 0 000 2z" />
                    <path fill="#FBBC04" d="M2.083 2.196C2.026 2.395 2 2.61 2 2.836v18.328c0 .226.026.44.083.64l8.522-8.49L2.083 2.196z" />
                    <path fill="#EA4335" d="M14.584 7.48L5.255 2.205a1.49 1.49 0 00-.172.091L11.565 13.5l3.019-3.02z" />
                  </svg>
                  <div>
                    <p className="text-[9px] uppercase tracking-wide leading-none">Disponible en</p>
                    <p className="text-xs font-semibold leading-tight">Google Play</p>
                  </div>
                </a>
              </div>

              {/* QR Code */}
              <div className="hidden sm:block bg-white rounded-xl p-2 shadow-lg">
                <img
                  src="/assets/qr_app.avif"
                  alt="QR Code"
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>

          {/* Right side: phone mockups - overlapping, cropped at bottom */}
          <div className="hidden md:flex items-end justify-center relative w-[340px] shrink-0 overflow-hidden">
            {/* Phone 1 - front/left */}
            <div className="relative z-10 w-44 -mr-10 mb-0 translate-y-12">
              <img
                src="/assets/phoneMockup_1_es.avif"
                alt="Civitatis App"
                className="w-full drop-shadow-2xl"
              />
            </div>
            {/* Phone 2 - back/right */}
            <div className="relative z-0 w-44 translate-y-20">
              <img
                src="/assets/phoneMockup_2_es.avif"
                alt="Civitatis App"
                className="w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
