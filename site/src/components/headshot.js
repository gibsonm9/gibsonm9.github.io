import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {

  const StyledImage = styled(Img)`
    /* you need to match the shadow color to your background or image border for the desired effect*/
    // box-shadow: 0 0 5px 5px #f7f1e6 inset;
    box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.3);
  `;

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />
}

export { Image }
