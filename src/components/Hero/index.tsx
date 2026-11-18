
import style from './style.module.css';

export default function Hero({ toggle, setToggle }: { toggle: boolean, setToggle: React.Dispatch<React.SetStateAction<boolean>> }) {
  const ScrollBelow = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
  
  return (
    <section className={style.heroSection}>

      {/* Animated Stripe Background */}
      <div className={style.ribbonContainer}>
        <svg
          className={style.ribbonSvg}
          viewBox="0 0 1600 1100"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Orange gradient */}
            <linearGradient id="orangeGradient"
              x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffbd59" />
              <stop offset="45%" stopColor="#ff7a45" />
              <stop offset="100%" stopColor="#ff4d91" />
            </linearGradient>

            {/* Pink gradient */}
            <linearGradient id="pinkGradient"
              x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff5277" />
              <stop offset="50%" stopColor="#f45bc7" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>

            {/* Purple gradient */}
            <linearGradient id="purpleGradient"
              x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c83ff" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#ec72d7" />
            </linearGradient>

            {/* Blue gradient */}
            <linearGradient id="blueGradient"
              x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8ec5fc" />
              <stop offset="50%" stopColor="#a5a4ff" />
              <stop offset="100%" stopColor="#e879f9" />
            </linearGradient>
          </defs>

          {/* Blue ribbon */}
          <g className={style.blueRibbon}>
            <path
              d="M 550 -250 C 700 100, 1000 350, 1700 750"
              stroke="url(#blueGradient)"
              strokeWidth="210"
              fill="none"
              opacity="0.65"
            />
          </g>

          {/* Purple ribbon */}
          <g className={style.purpleRibbon}>
            <path
              d="M 850 -300 C 850 100, 1150 350, 1750 900"
              stroke="url(#purpleGradient)"
              strokeWidth="180"
              fill="none"
              opacity="0.8"
            />
          </g>

          {/* Pink ribbon */}
          <g className={style.pinkRibbon}>
            <path
              d="M 1050 -350 C 950 100, 1250 500, 1800 1050"
              stroke="url(#pinkGradient)"
              strokeWidth="190"
              fill="none"
              opacity="0.85"
            />
          </g>

          {/* Orange ribbon */}
          <g className={style.orangeRibbon}>
            <path
              d="M 1150 -350 C 1150 100, 1400 450, 1650 1100"
              stroke="url(#orangeGradient)"
              strokeWidth="230"
              fill="none"
              opacity="0.9"
            />
          </g>

          {/* Magenta ribbon */}
          <g className={style.magentaRibbon}>
            <path
              d="M 1350 -300 C 1250 150, 1450 550, 1900 1100"
              stroke="url(#pinkGradient)"
              strokeWidth="130"
              fill="none"
              opacity="0.75"
            />
          </g>
        </svg>
      </div>

      {/* Hero content */}
      <div className={style.heroContent}>
        <span className={style.eyebrow}>
          WEDDING INVITATION PLATFORM
        </span>

        <h1>
          Create your beautiful
          <span> wedding moments.</span>
        </h1>

        <p>
          Create elegant digital wedding invitations
          with beautiful designs and unforgettable experiences.
        </p>

        <div className={style.heroButtons}>
          <button className={style.primaryButton} onClick={ScrollBelow}>
            Explore invitations →
          </button>

          <button className={style.secondaryButton} onClick={() => setToggle(!toggle)}>
            Learn more
          </button>
        </div>
      </div>

    </section>
  );
}
