import React from 'react';

import Image from '../image';

import styles from './pictures.module.css';
import './pictures.css';

const Pictures = ({ edges }) => {
  return (
    <section className={styles.container}>
    {edges.map(({ node: { frontmatter } }) => (
      <Image
        key={frontmatter.image.split('/')[frontmatter.image.split('/').length - 1]}
        className={styles.image}
        filename={frontmatter.image.split('/')[frontmatter.image.split('/').length - 1]}
      />
    ))}
    </section>
  )
}

export default Pictures;
