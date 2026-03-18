// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO / NOMBRE */}
        <a href="#" className="font-bold text-xl tracking-tighter text-slate-900 hover:text-blue-600 transition-colors">
          TU.NAME<span className="text-blue-600">_</span>
        </a>

        {/* LINKS DE NAVEGACIÓN */}
        <div className="flex gap-8 text-sm font-semibold text-slate-600">
          <a 
            href="#proyectos" 
            className="hover:text-blue-600 transition-colors"
          >
            Proyectos
          </a>
          <a 
            href="#contacto" 
            className="hover:text-blue-600 transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* BOTÓN DE ACCIÓN (OPCIONAL) */}
        <div className="hidden md:block">
          <a 
            href="mailto:tuemail@ejemplo.com" 
            className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-800 transition-all"
          >
            Contratarme
          </a>
        </div>

      </div>
    </nav>
  );
}