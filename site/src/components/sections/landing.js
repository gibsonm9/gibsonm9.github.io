import React from "react"
import styled from "styled-components"
import StyledBackgroundSection from "../background-image"
import ResumeDownloadLink from "../resume-download"
import SyllabusDownloadLink from "../syllabus-download"
import { StyledContentSection } from "../section-helpers"

const StyledLandingSection = styled.div`
  margin-top: 7em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4em;
`

const StyledTextSection = styled.div`
  width: 29em;
  height: 30em;
`

const LandingSection = () => (
	<StyledLandingSection>
	  <div>
	    <StyledBackgroundSection />
	  </div>
	  <StyledContentSection>
	    <StyledTextSection>
	      <h3>Hi I'm Marcus, and I teach Greek philosophy and the Catholic intellectual tradition.</h3>
	      <p>At present I am a John and Daria Barry Postdoctoral Research Fellow at the James Madison Program in American Ideals & Institutions at Princeton University.</p>
	      <p>I am also the Executive Director for the <a href="https://catholicthoughtprinceton.org/" target="_blank">Princeton Initiative in Catholic Thought</a>, a new academic program that aims to sponsor and organize a wide variety of high-caliber courses, lectures, seminars, and other offerings relating to Catholic thought.</p>
	      <p>I hold a doctorate (*19) from the Program in Classical Philosophy at Princeton University.  My current research focuses on what Aristotle and Thomas Aquinas can still contribute to our understanding of the role passions play in human life at its best.  I have taught philosophy courses at Princeton and Rutgers, and currently I am teaching a freshman seminar at Princeton on <SyllabusDownloadLink linkText="happiness and human nature in the Catholic intellectual tradition" />.</p>
	      Feel free to <a href="mailto:cbgibson@princeton.edu">write to me</a> or <ResumeDownloadLink linkText="view my CV" />.
	      </StyledTextSection>
	    </StyledContentSection>
	</StyledLandingSection>
)

export default LandingSection