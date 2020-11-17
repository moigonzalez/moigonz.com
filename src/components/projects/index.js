import React from 'react';

import styles from './projects.module.css';

const projectsConfig = [
  {
    name: 'MoneySwiper',
    url: 'https://moneyswiper.de/',
  },
  {
    name: 'pwa-barcode-scanner',
    url: 'https://pwascanit.com/',
  },
  {
    name: 'weather-preactpi',
    url: 'https://dev.to/moigonz/show-dev-raspberrypi-weather-fuelled-by-netlify-functions-and-preact-bne',
  },
  {
    name: 'who-arms-the-world',
    url: 'https://whoarmstheworld.com/',
  },
]

const Projects = () => {
  return <section className={styles.container}>
    <h1 className={styles.title}>Projects</h1>
    <div className={styles.content}>
      {projectsConfig.map(x =>
        <a key={x.name} target="_blank" rel="noopenner noreferrer" className={styles.item} href={x.url}>
          <span>{x.name}</span>
        </a>
      )}
    </div>
  </section>
}

export default Projects;
