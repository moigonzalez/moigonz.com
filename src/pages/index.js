import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero'
import Pictures from '../components/pictures';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';


const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark; // data.markdownRemark holds your post data

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Pictures edges={edges} />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(masonry)/"}},
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          frontmatter {
            image
          }
        }
      }
    }
  }
`;

export default IndexPage;
