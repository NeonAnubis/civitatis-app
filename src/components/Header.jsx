import { useState } from 'react';

export default function Header() {
  const [appBannerOpen, setAppBannerOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Main navbar */}
      <div className="bg-civitatis-pink">
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="text-white text-2xl font-bold tracking-wide">
            civitatis
          </a>

          {/* Right side nav */}
          <div className="flex items-center gap-4">
            {/* Language */}
            <button className="text-white text-sm flex items-center gap-1 hover:opacity-80">
              Español
              <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </button>

            {/* Currency */}
            <button className="text-white text-sm flex items-center gap-1 hover:opacity-80">
              US$
              <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </button>

            {/* Accessibility icon */}
            <button className="text-white hover:opacity-80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a2 2 0 100 4 2 2 0 000-4zm-1 6C9.3 8 8 9.3 8 11h2v3l-3 7h2.2l2.8-6.5L14.8 21H17l-3-7v-3h2c0-1.7-1.3-3-3-3z" />
              </svg>
            </button>

            {/* Favorites icon */}
            <button className="text-white hover:opacity-80">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>

            {/* Log in */}
            <button className="text-white text-sm border border-white rounded-full px-4 py-1 hover:bg-white hover:text-civitatis-pink transition-colors">
              Iniciar sesión
            </button>

            {/* Sign up */}
            <button className="text-white text-sm border border-white rounded-full px-4 py-1 hover:bg-white hover:text-civitatis-pink transition-colors">
              Registrarse
            </button>
          </div>
        </div>
      </div>

      {/* Sub navbar - Download the new app (white background) */}
      <div className="bg-white border-b border-gray-200 text-center py-2 text-sm">
        <button
          onClick={() => setAppBannerOpen(!appBannerOpen)}
          className="inline-flex items-center gap-1.5 text-gray-700 hover:text-civitatis-pink transition-colors"
        >
          <span className="bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Nuevo</span>
          <span className="font-medium">Descárgate la nueva app</span>
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${appBannerOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 4l4 4 4-4" />
          </svg>
        </button>
      </div>

      {/* Collapsible app download panel */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${appBannerOpen ? 'max-h-[250px]' : 'max-h-0'}`}
      >
        <div className="bg-white py-4 px-4">
          <div className="max-w-5xl mx-auto">
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

              {/* Close X button - top right */}
              <button
                onClick={() => setAppBannerOpen(false)}
                className="absolute top-3 right-4 z-20 text-white flex items-center gap-1.5 text-xs font-medium hover:opacity-80 transition-opacity"
              >
                CERRAR
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative z-10 flex items-center px-10 py-6 gap-10">
                {/* Left: text */}
                <div className="text-white shrink-0 max-w-[280px]">
                  <h3 className="text-xl font-bold italic leading-tight mb-1.5">
                    ¿Tienes en mente tu<br />próximo viaje?
                  </h3>
                  <p className="text-xs text-white/80">
                    Descárgate la nueva app de Civitatis y empezamos a planearlo.
                  </p>
                </div>

                {/* QR Code */}
                <div className="hidden sm:block bg-white rounded-xl p-2 shadow-lg shrink-0">
                  <img
                    src="/assets/qr_app.avif"
                    alt="QR Code"
                    className="w-16 h-16"
                  />
                </div>

                {/* Store buttons stacked */}
                <div className="flex flex-col gap-2 shrink-0">
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

                {/* Phone mockups - overlapping, top half visible */}
                <div className="hidden lg:block relative flex-1 self-stretch overflow-hidden">
                  <img
                    src="/assets/phoneMockup_1_es.avif"
                    alt="Civitatis App"
                    className="absolute bottom-0 right-[60px] w-[110px] translate-y-[48%] z-10 drop-shadow-2xl"
                  />
                  <img
                    src="/assets/phoneMockup_2_es.avif"
                    alt="Civitatis App"
                    className="absolute bottom-0 right-0 w-[110px] translate-y-[55%] z-0 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
