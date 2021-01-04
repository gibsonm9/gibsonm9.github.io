import React from "react"
import styled from "styled-components"
import { Image } from "../headshot"
import ResumeDownloadLink from "../resume-download"
import SyllabusDownloadLink from "../syllabus-download"
import { StyledContentSection } from "../section-helpers"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StyledLandingSection = styled(Row)`
  margin-top: 12vh;
  margin-bottom: 2em;
`

const StyledCol = styled(Col)`
	@media (max-width: 1000px) {
	  padding-top: 3em;
	}
`

const CenteredContainer = styled.div`
	margin: auto;
	text-align: center;
`

const StyledImageContainer = styled.div`
	max-width: 30em;
	margin: auto;
`

const StyledTextSection = styled.div`
  min-height: 30em;
  @media (min-width: 1000px) {
	margin-left: 3.5%;
  }
`

const StyledHeaderText = styled.div`
	padding-bottom: 1em;
`

const LandingSection = () => (
	<StyledLandingSection>
	  <Col>
	  	<CenteredContainer>
	  		<StyledImageContainer>
	    		<Image/>
	    	</StyledImageContainer>
    	</CenteredContainer>
	  </Col>
	  <StyledCol lg={8}>
		  <StyledContentSection>
		    <StyledTextSection>
		    	<StyledHeaderText>
		      	<h3>I'm Christopher-Marcus Gibson, and I teach Greek philosophy and the Catholic intellectual tradition.</h3>
	      	</StyledHeaderText>
		      <p>At present I am a John and Daria Barry Postdoctoral Research Fellow at the James Madison Program in American Ideals & Institutions at Princeton University.</p>
		      <p>I am also the Executive Director for the <a href="https://catholicthoughtprinceton.org/" target="_blank">Princeton Initiative in Catholic Thought</a>, a new academic program that aims to sponsor and organize a wide variety of high-caliber courses, lectures, seminars, and other offerings relating to Catholic thought.</p>
	      	<p>I hold a doctorate (*19) from the Program in Classical Philosophy at Princeton University.  My current research focuses on what Aristotle and Thomas Aquinas can still contribute to our understanding of the role passions play in human life at its best.  I have taught philosophy courses at Princeton and Rutgers, and currently I am teaching a freshman seminar at Princeton on <SyllabusDownloadLink linkText="happiness and human nature in the Catholic intellectual tradition" />.</p>
	      	<p>Feel free to <a href="mailto:cbgibson@princeton.edu">write to me</a> or <ResumeDownloadLink linkText="view my cv" />.</p>
	      </StyledTextSection>
	    </StyledContentSection>
    </StyledCol>
	</StyledLandingSection>
)

export default LandingSection