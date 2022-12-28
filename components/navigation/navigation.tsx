import Link from 'next/link';
import React from 'react';
import { navigation } from '../../data/navigation';

interface NavigationProps {
  withHome?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ withHome = true }) => {
  return (
    <ul className="grid gap-4 text-center md:flex md:flex-1 md:items-center md:justify-center md:gap-2 md:text-left">
      {withHome && (
        <li className="cursor-pointer uppercase tracking-widest transition duration-300 hover:opacity-25">
          <Link href="/">Home</Link>
        </li>
      )}

      {navigation.map(({ title, href }, i) => (
        <li
          key={i}
          className="cursor-pointer uppercase tracking-widest transition duration-300 hover:opacity-25"
        >
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
