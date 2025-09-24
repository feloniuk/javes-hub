'use client'
import MainTeamMember from '@/components/Team/TeamSection/MainTeamMember/MainTeamMember';
import TeamMember from '@/components/Team/TeamSection/TeamMember/TeamMember';
import s from './OurTeam.module.scss';
import team from './data.json';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const OurTeam = () => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const mainGridRef = useRef();
  const gridRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { x: -100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.8 },
    )
      .fromTo(
        textRef.current,
        { x: 100, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8 },
        '-=0.6',
      )
      .fromTo(
        mainGridRef.current.children,
        { y: 100, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2 },
        '-=0.6',
      );

      gsap.fromTo(
        gridRef.current.children,
        { y: 100, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
  }, []);

  const { mainTeamMembers, teamMembers } = team;
  return (
    <section ref={sectionRef} className={s.section}>
      <div className="container">
        <div className={s.headingBlock}>
          <h1 ref={headingRef} className={`${s.heading} heading-2`}>
            Our <span className="bold">Team</span>
          </h1>

          <p ref={textRef} className={s.text}>
            Pro players can use JVS tokens for self-promotion and ads within the JAVES ecosystem. 
            Top search placement with &quot;ADS&quot; labels, highlighting effects, shout messages, 
            everything that helps PRO players sell their services, are vital for JAVES monetization.
          </p>
        </div>

        <div ref={mainGridRef} className={s.mainTeamGrid}>
          {mainTeamMembers.map(member => (
            <MainTeamMember
              key={member.id}
              name={member.name} 
              position={member.position} 
              text={member.text} 
              image={member.image}
              hoverImage={member.hoverImage}
              linkedin={member.linkedin} 
              modifier={`card${member.id}`}
            />
          ))}
        </div>

        <div ref={gridRef} className={s.teamGrid}>
          {teamMembers.map(teamMember => (
            <TeamMember 
              key={teamMember.id}
              name={teamMember.name} 
              position={teamMember.position} 
              image={teamMember.image}
              hoverImage={teamMember.hoverImage}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam