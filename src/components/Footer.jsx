// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer id="contacto" className="py-12 border-t border-slate-200 text-center">
      <h3 className="text-2xl font-bold mb-4 text-slate-800">¿Hablamos?</h3>
      <p className="text-slate-600 mb-6">Estoy disponible para nuevos proyectos.</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:tuemail@ejemplo.com" className="text-blue-600 font-medium hover:underline">Email</a>
        <a href="#" className="text-slate-500 hover:text-slate-800 transition">GitHub</a>
        <a href="#" className="text-slate-500 hover:text-slate-800 transition">LinkedIn</a>
      </div>
      <p className="mt-8 text-xs text-slate-400">© 2024 MiPortfolio. Hecho con React.</p>
    </footer>
  );
}