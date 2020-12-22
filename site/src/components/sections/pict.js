import React from "react"
import styled from "styled-components"
import { StyledContentSection, StyledContentHeading } from "../section-helpers"
import Image from "../image"

const StyledPictSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const StyledPictLeftSection = styled.div`
  width: 32em;
`
const StyledPictRightSection = styled.div`
  width: 20em;
  margin: 1em 2em;
`

const PictSection = () => (
	<StyledContentSection>
      <StyledContentHeading>princeton initiative in catholic thought</StyledContentHeading>
      <StyledPictSection>
        <StyledPictLeftSection>
          <p>In addition to my research and teaching, beginning in Fall 2020 I also serve as the Executive Director for the <a href="https://catholicthoughtprinceton.org/" target="_blank" rel="noreferrer">Princeton Initiative in Catholic Thought</a>, a new academic program that aims to sponsor and organize a wide variety of high-caliber courses, lectures, seminars, and other offerings relating to Catholic thought.</p>
          <p>We offer all our events and programming to interested students and scholars of any background or worldview, always aiming to bring each topic to fruitful contact with human life and reflection here and now.</p>
          <p>In the Fall 2020 semester, the Princeton Initiative in Catholic Thought is offering a seminar on happiness and human nature in the Catholic intellectual tradition, as well as two graduate-level study groups; in the Spring 2021 semester, the Initiative will offer the inaugural Maritain Lectures, featuring Denys Turner (February 2021) and Paul J. Griffiths (March 2021).</p>
        </StyledPictLeftSection>
        <StyledPictRightSection>
          <Image/>
        </StyledPictRightSection>
      </StyledPictSection>
    </StyledContentSection>
)

export default PictSection