import Link from 'next/link';
import React from 'react';
import { navigation } from '../data/navigation';

interface NavigationProps {
  withHome?: boolean;
  isFooter?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  withHome = true,
  isFooter = false,
}) => {
  return (
    <ul
      className={`grid gap-5 text-center text-xs md:flex md:flex-1 md:items-center md:justify-center md:gap-10 md:text-left ${
        isFooter ? 'lg:grid lg:gap-5' : ''
      }`}
    >
      {withHome && (
        <li className="cursor-pointer uppercase tracking-[0.125rem] transition duration-300 hover:opacity-25">
          <Link href="/">Home</Link>
        </li>
      )}

      {navigation.map(({ title, href }, i) => (
        <li
          key={i}
          className="cursor-pointer uppercase tracking-[0.125rem] transition duration-300 hover:opacity-25"
        >
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
