import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SyllabusDownloadLink = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "syllabus.pdf" }}) {
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

export default SyllabusDownloadLink