import React from 'react';
import Arrow from '../svg/Arrow';
import { useRouter } from 'next/router';

interface ButtonProps {
  /** The `text` property will display the button text. */
  text: string;
  /** The `variant` property is used to differentiate the type of the button and it will be reflected to the UI appearance.
   *
   * The `text` variant will show an Arrow svg next to the button `text` by default.
   */
  variant: 'contained' | 'text';
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'text',
  onClick,
  href,
}) => {
  const router = useRouter();

  const onClickHandler = () => {
    if (onClick) onClick();
    if (href) router.push(`${href}`);
  };

  if (variant === 'text')
    return (
      <button
        className="group relative flex items-center gap-2 text-xs uppercase tracking-widest transition duration-300"
        onClick={onClickHandler}
      >
        <span className="invisible absolute -bottom-2 left-0 h-[1px] w-0 bg-current opacity-0 transition-all duration-300 group-hover:visible group-hover:w-full group-hover:opacity-100"></span>
        {text} <Arrow />
      </button>
    );

  return (
    <button
      className="bg-black px-6 py-3 text-xs uppercase tracking-widest text-white transition duration-300 hover:bg-brand-light-grey hover:text-black"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
