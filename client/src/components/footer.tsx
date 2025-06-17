import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Wesley Monteiro</div>
          <p className="text-slate-400 mb-6">Desenvolvedor Full Stack</p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <i className={`${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">© 2024 Wesley Monteiro. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
