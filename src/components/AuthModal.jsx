import { useState } from 'react';

export default function AuthModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const isValid = email.includes('@');

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Inicia sesión o regístrate
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Planifica tus vacaciones, sincroniza tus reservas, accede a tus
            favoritos y paga más rápido con{' '}
            <span className="font-semibold text-gray-700">tu cuenta</span>.
          </p>

          {/* Email input */}
          <div className="relative mb-1">
            <span className="absolute -top-5 right-0 text-[11px] text-civitatis-pink">
              {touched && !isValid ? 'Campo obligatorio' : ''}
              {!touched ? <span className="text-gray-400">Campo obligatorio</span> : null}
            </span>
            <div className={`flex items-center border rounded-lg px-4 py-3 ${
              touched && !isValid
                ? 'border-civitatis-pink bg-red-50'
                : 'border-gray-300 focus-within:border-civitatis-pink'
            } transition-colors`}>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                className="flex-1 text-sm text-gray-700 outline-none bg-transparent placeholder-gray-400"
              />
              {touched && !isValid && (
                <svg className="w-5 h-5 text-civitatis-pink shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              )}
            </div>
          </div>

          {/* reCAPTCHA notice */}
          <p className="text-xs text-gray-400 mt-4 mb-5 leading-relaxed">
            Este sitio está protegido por reCAPTCHA y se aplican la{' '}
            <a href="#" className="text-civitatis-pink hover:underline">política de privacidad</a>
            {' '}y los{' '}
            <a href="#" className="text-civitatis-pink hover:underline">términos de servicio</a>
            {' '}de Google.
          </p>

          {/* Continue button */}
          <button
            disabled={!isValid}
            className={`w-full py-3 rounded-full text-sm font-semibold transition-colors ${
              isValid
                ? 'bg-civitatis-pink text-white hover:bg-civitatis-pink-dark'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continuar con tu email
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="text-xs text-gray-400">O continúa con</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Social buttons */}
          <div className="flex gap-3 justify-center mb-6">
            {/* Google */}
            <button className="flex items-center justify-center w-20 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>

            {/* Facebook */}
            <button className="flex items-center justify-center w-20 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>

            {/* Apple */}
            <button className="flex items-center justify-center w-20 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000000">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </button>
          </div>

          {/* Bottom link */}
          <p className="text-xs text-gray-500 text-center">
            Puedes gestionar tu reserva sin estar registrado desde{' '}
            <a href="#" className="text-civitatis-pink hover:underline font-medium">
              este enlace
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
