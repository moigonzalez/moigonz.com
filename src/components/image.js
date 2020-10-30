import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: {sourceInstanceName: {eq: "pictures"}}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1200, quality: 85) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    `}
    render={({ images }) => {
      const image = images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })

      if (!image) {
        return null
      }

      const verticalImg = image.node.childImageSharp.fluid.presentationWidth < image.node.childImageSharp.fluid.presentationHeight;

      return (
        <Img
          alt={props.alt}
          style={{
            maxWidth: verticalImg ? '52%' : '100%'
          }}
          className={[props.className, verticalImg ? 'vertical' : 'horizontal'].join(' ')}
          fluid={image.node.childImageSharp.fluid}
        />
      )
    }}
  />
)

export default Image
