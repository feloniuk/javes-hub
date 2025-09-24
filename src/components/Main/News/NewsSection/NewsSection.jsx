'use client';
import { useRef } from 'react';
import s from './NewsSection.module.scss';
import { useNewsSectionAnimation } from '@/hooks/home/NewsSection/useNewsSectionAnimation'; 
import { useScrollHandler } from '@/hooks/home/NewsSection/useScrollHandler'; 

const NewsSection = ({ children }) => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const handlersRef = useRef();
  let sliderRef = useRef(null);

  useNewsSectionAnimation(sectionRef, headingRef, handlersRef, sliderRef);
  const { isLeft, isRight, scrollLeft, scrollRight } = useScrollHandler(sliderRef);

  return (
    <section ref={sectionRef} className={s.section}>
      <div className='container'>
        <div className={s.headingBlock}>
          <h3 ref={headingRef} className={`${s.heading} heading-2`}>
            Featured <span className='bold'>News</span>
          </h3>

          <div ref={handlersRef} className={s.handlersBlock}>
            <button
              className={s.handler}
              onClick={scrollLeft}
              disabled={isLeft}
            >
              <svg
                className={s.prevIcon}
                role='img'
                aria-label='Previous slide'
              >
                <use xlinkHref='/assets/sprite.svg#prev-arrow'></use>
              </svg>
            </button>
            <button
              className={s.handler}
              onClick={scrollRight}
              disabled={isRight}
            >
              <svg className={s.nextIcon} role='img' aria-label='Next slide'>
                <use xlinkHref='/assets/sprite.svg#next-arrow'></use>
              </svg>
            </button>
          </div>
        </div>

        <div className={s.sliderContainer}>
          <div className={s.slider} ref={sliderRef}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
