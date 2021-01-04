import React from "react"
import styled from "styled-components"
import { StyledContentSection, StyledContentHeading } from "../section-helpers"
import Image from "../pict-image"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

const StyledPictSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledImageContainer = styled.div`
  max-width: 300px;
  position: relative;
  top: -2em;
  min-width: 200px;
  width: 100%;
  margin: auto;
  
  @media (max-width: 1000px) {
    padding-top: 3em;
  }
`

const PictSection = () => (
	<StyledContentSection>
    <a name="pict" />
    <StyledContentHeading>PICT</StyledContentHeading>
    <Media>
    <Row>
      <Media.Body>
        <Col>
          <p>In addition to my research and teaching, beginning in Fall 2020 I also serve as the Executive Director for the <a href="https://catholicthoughtprinceton.org/" target="_blank" rel="noreferrer">Princeton Initiative in Catholic Thought</a>, a new academic program that aims to sponsor and organize a wide variety of high-caliber courses, lectures, seminars, and other offerings relating to Catholic thought.</p>
          <p>We offer all our events and programming to interested students and scholars of any background or worldview, always aiming to bring each topic to fruitful contact with human life and reflection here and now.</p>
          <p>In the Fall 2020 semester, the Princeton Initiative in Catholic Thought is offering a seminar on happiness and human nature in the Catholic intellectual tradition, as well as two graduate-level study groups; in the Spring 2021 semester, the Initiative will offer the inaugural Maritain Lectures, featuring Denys Turner (February 2021) and Paul J. Griffiths (March 2021).</p>
        </Col>
      </Media.Body>
      <Col lg={3} className="align-self-center mr-3">
        <StyledImageContainer>
          <Image />
        </StyledImageContainer>
      </Col>
    </Row>
    </Media>
  </StyledContentSection>
)

export default PictSection