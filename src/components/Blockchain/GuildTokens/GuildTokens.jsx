'use client'
import Image from 'next/image';
import { useRef } from 'react';
import { useGuildTokensAnimation } from '@/hooks/blockchain/GuildTokensSection/useGuildTokensAnimation';
import s from './GuildTokens.module.scss';

const GuildTokens = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const textOneRef = useRef();
  const coinOneRef = useRef();
  const textTwoRef = useRef();
  const coinTwoRef = useRef();
  const textFlagRef = useRef();
  const flagRef = useRef();

  useGuildTokensAnimation(
    containerRef,
    headingRef,
    textOneRef,
    textTwoRef,
    coinOneRef,
    coinTwoRef,
    flagRef,
    textFlagRef,
  );

  return (
    <section id='guild-tokens' ref={containerRef} className={s.section}>
      <div className="container">
        <h2 ref={headingRef} className={`${s.heading} heading-2`}>
          Guild <span className="bold">Tokens</span>
        </h2>

        <div className={s.grid}>
          <div className={s.content}>
            <p ref={textOneRef} className={s.text}>
              Javes will let gaming guilds make their own tokens. 
              These tokens can help create a guild economy, reward players, and let 
              guild members trade among themselves.
            </p>

            <Image
              ref={coinOneRef}
              className={`${s.image} ${s.coin}`}
              src="/assets/blockchain/guild-tokens/tokens-1.svg"
              alt="A stylized coin with the letter 'G' at the center, tilted to the side, on a dark background"
              width={250}
              height={152}
            />
          </div>

          <div className={`${s.content} ${s.flagContent}`}>
            <Image
              ref={flagRef}
              className={`${s.image} ${s.flag}`}
              src="/assets/blockchain/guild-tokens/tokens-2.svg"
              alt="A shield-shaped icon with the 'G' at the center, representing a digital token or in-game currency"
              width={250}
              height={152}
            />

            <p ref={textFlagRef} className={s.text}>
              In MMORPGs, players often encounter DKP (Dragon Kill Points) systems, 
              rewarding participation in guild battles. Guild Tokens take inspiration 
              from DKP but expand the concept, giving guilds more options.
            </p>
          </div>

          <div className={s.content}>
            <p ref={textTwoRef} className={s.text}>
              Using JVS guilds can generate their tokens at a rate of 1 to 100. 
              Additionally, a feature for converting guild tokens back into JVS 
              will be provided as well.
            </p>

            <Image
              ref={coinTwoRef}
              className={`${s.image} ${s.coin}`}
              src="/assets/blockchain/guild-tokens/tokens-3.svg"
              alt="Two angled views of a coin similar to the first, showcasing the design in different perspectives."
              width={250}
              height={152}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuildTokens