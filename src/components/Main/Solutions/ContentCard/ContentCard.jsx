import Image from 'next/image';
// import Button from '@/components/Common/Button/Button';
import s from './ContentCard.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from 'react';

const ContentCard = ({ activeContent }) => {
  const cardRef = useRef();
  const imageRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();

  const [imageLoaded, setImageLoaded] = useState(false);

  const { 
    image, 
    altText, 
    title, 
    text 
  } = activeContent;

  useEffect(() => {
    if (imageLoaded) {
      gsap.registerPlugin(ScrollTrigger);
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 70%",
          invalidateOnRefresh: true,
          toggleActions: "play none none none"
        }
      });
  
      tl.fromTo(imageRef.current, { x: -100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8 })
        .fromTo(headingRef.current, { x: 100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")
        .fromTo(textRef.current, { x: 100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5");
    }
  }, [imageLoaded]);

  useEffect(() => {
    setImageLoaded(false);
  }, [activeContent]);

  return (
    <div ref={cardRef} className={s.contentCard}>
      <div ref={imageRef} className={s.imageWrapper}>
        <Image 
          src={image} 
          alt={altText} 
          className={s.cardImage}
          width={280}
          height={280}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className={s.contentWrapper}>
        <h3 ref={headingRef} className={`${s.heading} heading-3`}>{title}</h3>
        <p ref={textRef} className={s.cardText}>{text}</p>
        
        {/* <div className={s.buttonWrapper}>
          <Button
            href='/'
            className='buttonCard'
          >
            Join as a Player
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default ContentCard