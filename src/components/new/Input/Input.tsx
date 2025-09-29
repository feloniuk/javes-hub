import React, { ElementType } from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  required?: boolean;
  message?: string;
  variant?: 'input' | 'textarea';
  status?: 'error' | 'success';
}

const style =
  'bg-transparent border-primary-white/50 focus:border-primary-white transition-colors rounded-lg border-solid border text-primary-white/50 text-body-s-desktop leading-10 px-4';

export const Input = ({
  label,
  className,
  required,
  variant = 'input',
  message,
  ...props
}: InputProps) => {
  const Slot = `${variant}` as ElementType;
  return (
    <div className={clsx('flex flex-col gap-2', {
      'text-accents-red [&_textarea]:border-accents-red [&_input]:border-accents-red': props.status === 'error',
    },className)}>
      <label className={'text-white text-body-xs-desktop'} htmlFor={props.id}>
        {label}{' '}
        {!!required && (
          <sup className={'text-accents-red static text-body-xs-desktop'}>
            *
          </sup>
        )}
      </label>
      <Slot className={style} rows={4} {...props} />
      <span className={'text-body-xs-desktop'}>{message}</span>
    </div>
  );
};
