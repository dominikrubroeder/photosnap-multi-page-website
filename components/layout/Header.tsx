import React, { useState } from 'react';
import Logo from '../svg/Logo';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import Navigation from '../navigation/navigation';
import { AnimatePresence } from 'framer-motion';

// Staggering navigation items appearance: https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed=&file=/src/Navigation.tsx
const Header: React.FC = () => {
  const [showNavigationFlyout, setShowNavigationFlyout] = useState(false);

  return (
    <header className="relative p-4">
      <div className="mx-auto flex max-w-[69.375rem] items-center justify-between gap-4">
        <Logo />

        <div className="md:flex-1">
          <button
            className="group inline-grid cursor-pointer gap-1 py-4 transition md:hidden"
            onClick={() =>
              setShowNavigationFlyout((previousState) => !previousState)
            }
          >
            <span
              className={`relative h-[0.0625rem] w-5 origin-center cursor-pointer bg-black transition duration-300 ${
                showNavigationFlyout ? 'rotate-45' : 'rotate-0'
              }`}
            ></span>
            <span
              className={`relative h-[0.0625rem] w-5 origin-center cursor-pointer bg-black transition duration-300 ${
                showNavigationFlyout ? '-top-1 -rotate-45' : 'top-0 rotate-0'
              }`}
            ></span>
          </button>

          <div className="absolute left-0 z-50 hidden w-full justify-center gap-8 bg-white md:relative md:left-auto md:mt-0 md:flex md:justify-between md:py-0">
            <Navigation withHome={false} />

            <hr className="border-black opacity-25 md:hidden" />

            <Button variant="contained" text="Get an invite" />
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {showNavigationFlyout && (
          <motion.div
            key="navigationFlyout"
            initial={{ opacity: 0, height: '0', visibility: 'hidden', y: -24 }}
            animate={{
              opacity: 1,
              height: 'auto',
              visibility: 'visible',
              y: 0,
            }}
            exit={{ opacity: 0, height: '0' }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            className="absolute left-0 z-50  w-full  bg-white md:hidden"
          >
            <motion.div
              key="navigationFlyoutContent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'easeOut', delay: 0.4 }}
              className="grid justify-center gap-8 py-8"
            >
              <Navigation withHome={false} />

              <motion.hr
                key="navigationFlyoutDivider"
                initial={{ opacity: 0, width: '0%' }}
                animate={{ opacity: 0.25, width: '100%' }}
                exit={{ opacity: 0, width: '0%' }}
                transition={{ ease: 'easeOut', delay: 0.8 }}
                className="mx-auto border-black md:hidden"
              />

              <Button variant="contained" text="Get an invite" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
