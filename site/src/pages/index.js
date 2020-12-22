import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import Layout from "../components/layout"
import StyledBackgroundSection from "../components/background-image"
import SEO from "../components/seo"
import { MUTED_TEAL } from "../components/colors"
import DownloadLink from "../components/file-download"

const StyledLandingPage = styled.div`
  padding-top: 7em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  color: ${MUTED_TEAL};
`;

const StyledTextSection = styled.div`
  width: 29em;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledLandingPage>
      <StyledTextSection class="about">
        <h3>Hi I'm Marcus, and I teach Greek philosophy and the Catholic intellectual tradition.</h3>
        <p>At present I am a John and Daria Barry Postdoctoral Research Fellow at the James Madison Program in American Ideals & Institutions at Princeton University.</p>
        <p>I am also the Executive Director for the <StyledLink href="https://catholicthoughtprinceton.org/" target="_blank">Princeton Initiative in Catholic Thought</StyledLink>, a new academic program that aims to sponsor and organize a wide variety of high-caliber courses, lectures, seminars, and other offerings relating to Catholic thought.</p>
        <p>I hold a doctorate (*19) from the Program in Classical Philosophy at Princeton University.  My current research focuses on what Aristotle and Thomas Aquinas can still contribute to our understanding of the role passions play in human life at its best.  I have taught philosophy courses at Princeton and Rutgers, and currently I am teaching a freshman seminar at Princeton on happiness and human nature in the Catholic intellectual tradition.</p>
        Feel free to <a href="mailto:cbgibson@princeton.edu">write to me</a> or <DownloadLink linkText="view my CV" />.
      </StyledTextSection> 
      <div style={{ minWidth: `400px` }}>
        <StyledBackgroundSection />
        
      </div>
    </StyledLandingPage>
  </Layout>
)

export default IndexPage
