import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ResumeDownloadLink = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "resume.pdf" }}) {
        nodes {
          publicURL
        }
      }
    }
  `)

  return (
    <a href={data.allFile.nodes[0].publicURL} download>
      {props.linkText}
    </a>
  )
}

export default ResumeDownloadLink