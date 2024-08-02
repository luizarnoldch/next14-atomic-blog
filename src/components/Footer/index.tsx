import Instagram from '@/icons/Instagram';
import LinkedIn from '@/icons/LinkedIn';
import Threads from '@/icons/Threads';
import TikTok from '@/icons/Tiktok';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { href: "https://www.instagram.com", icon: Instagram, name: "Instagram" },
  { href: "https://www.threads.net", icon: Threads, name: "Threads" },
  { href: "https://www.tiktok.com", icon: TikTok, name: "TikTok" },
  { href: "https://www.linkedin.com", icon: LinkedIn, name: "LinkedIn" },
];

const navigationItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'CV', href: '/cv' },
  { name: 'Blog', href: '/blog' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-primary-foreground py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Columna de Logo y Descripción */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image
            src="/logoicon.png"
            alt="logo_icon"
            width={35}
            height={35}
            className="md:hidden"
            sizes="auto"
          />
          <Image
            src="/logowithname.png"
            alt="logo_icon"
            width={130}
            height={65}
            className="md:block hidden w-40"
          />
          <p className="text-white text-center md:text-left max-w-xs">
            Descubre tu potencial en la tecnología con nuestras soluciones y servicios innovadores.
          </p>
        </div>

        {/* Columna de Navegación */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-white font-semibold">Navegación</h2>
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <span className="text-white hover:underline">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna de Redes Sociales */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-white font-semibold">Síguenos</h2>
          <ul className="flex space-x-4">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <Link href={social.href} target="_blank">
                  <span className="text-white hover:text-gray-400">
                    <social.icon className="w-6 h-6" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
