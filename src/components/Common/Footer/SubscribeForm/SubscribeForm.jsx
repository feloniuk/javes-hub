import { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './SubscribeForm.module.scss';
import { subscribe } from '@/actions/formAction';
import clsx from 'clsx';

const SubscribeForm = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);

  const handleFocus = () => {
    setInputFocus(true);
  };

  const handleBlur = () => {
    setInputFocus(false);
  };

  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async data => {
    try {
      const result = await subscribe(data);
      setServerMessage({ 
        message: result.message, 
        type: result.success ? 'success' : 'error' 
      });
      
      if (result.success) {
        reset();
      }
      setTimeout(() => setServerMessage(null), 3000);
    } catch (error) {
      console.error('Subscription error:', error);
      setServerMessage({ 
        message: 'An unexpected error occurred.', 
        type: 'error' 
      });
      setTimeout(() => setServerMessage(null), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.subscribeForm} noValidate>
      <label htmlFor="email" className={s.inputLabel}>
        Sign up for exclusive news
      </label>

      <div className={clsx(s.inputGroup, {
        [s.focus]: inputFocus,
        [s.error]: errors.email || (serverMessage && serverMessage.type === 'error'),
        [s.success]: serverMessage && serverMessage.type === 'success'
      })}>
        <input
          {...register("email", {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: 'Entered value does not match email format'
            }
          })}
          id="email"
          type="email"
          className={s.emailInput}
          placeholder="Your email"
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className={s.errorMessage}>{errors.email.message}</p>
        )}

        {!errors.email && serverMessage && (
          <p className={s[serverMessage.type === 'error' ? 'errorMessage' : 'successMessage']}>
            {serverMessage.message}
          </p>
        )}

        {isSubmitting && (
          <p className={s.processMessage}>Please wait, your request is being processed...</p>
        )}

        <button 
          disabled={isSubmitting} 
          type="submit" 
          className={s.subscibeButton}
        >
          {serverMessage && serverMessage.type === 'success' ? (
            <svg
              className={s.checked}
              role='img'
              aria-label='Submit'
            >
              <use xlinkHref='/assets/sprite.svg#submit-checked'></use>
            </svg>
          ) : (
            <svg
              className={s.arrow}
              role='img'
              aria-label='Submit'
            >
              <use xlinkHref='/assets/sprite.svg#submit-arrow'></use>
            </svg>
          )}
        </button>
      </div>
    </form>
  )
}

export default SubscribeForm