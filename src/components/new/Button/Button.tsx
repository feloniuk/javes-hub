import React from 'react';
import { cva, cx, VariantProps } from 'cva';

const button = cva(['text-white disabled:opacity-50 rounded-xl capitalize'], {
  variants: {
    kind: {
      primary: ['bg-accents-purple', 'hover:red-gradient'],
      line: [
        'border-primary-white/50',
        'border-[2px]',
        'border-solid',
        'hover:border-accents-red',
      ],
    },
    size: {
      md: ['text-body-s-desktop', 'px-6', 'py-3'],
      lg: ['text-body-l-desktop', 'px-7', 'py-2.5'],
    },
  },
});

type ButtonProps = VariantProps<typeof button> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ kind, size, className, ...props }: ButtonProps) => {
  return (
    <button className={cx(button({ kind, size }), className)} {...props} />
  );
};
