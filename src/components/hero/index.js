import React from 'react';

import styles from './hero.module.css';

import video from './dark_church_small.mp4'

const Hero = () => (
  <section className={styles.container}>
    <video className={styles.video} autoPlay muted>
      <source src={video} type="video/mp4" />
    </video>
    <div className={styles.content}>
      <h1 className={styles.title}>Moises Gonzalez</h1>
      <h2 className={styles.subtitle}>Photography & Web Development</h2>
      <div className={styles.buttonsContainer}>
        <a target="_blank" className="button" rel="noopenner noreferrer" href="https://www.instagram.com/moigonzz/">
          instagram
        </a>
        <a target="_blank" className="button" rel="noopenner noreferrer" href="https://github.com/moigonzalez">
          github
        </a>
        <a target="_blank" className="button" rel="noopenner noreferrer" href="https://www.youtube.com/channel/UCYX80lAviPZ5HuNSQIMoTxg">
          youtube
        </a>
        <a className="button" href="mailto:hello@moigonz.com">contact</a>
      </div>
    </div>
  </section>
)

export default Hero;
