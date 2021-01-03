import React from "react"
import styled from "styled-components"
import { StyledContentSection, StyledContentHeading } from "../section-helpers"
import { MUTED_TEAL } from "../colors"
import { Image as PrincetonLogo } from "../princeton-logo"
import { Image as RutgersLogo } from "../rutgers-logo"

export const StyledCourseSection = styled.div`
  padding: 0 1.5em;
  display: flex;
  width: 35em;
`

export const LogoHolder = styled.div`
	width: 2em;
	padding-top: 1.2em;
`

export const StyledCourseDescription = styled.div`
	padding: 1em 1em 1em 1.5em;
	
	&:last-child {
		padding-bottom: 0;
	}
`

export const StyledCourseTitle = styled.h5`
	
`

export const StyledCourseMetadata = styled.p`
	color: gray;
	margin: 0;
`

const TeachingSection = () => (
	<>
		<a name="teaching" />
		<StyledContentSection>
		  <StyledContentHeading>Teaching</StyledContentHeading>
			<StyledCourseSection>
				<LogoHolder>
					<PrincetonLogo />
				</LogoHolder>
				<StyledCourseDescription>
					<StyledCourseTitle>
						Happiness & Being Human in Catholic Thought
					</StyledCourseTitle>
					<StyledCourseMetadata>
						Princeton University | Fall 2020 | Sole Instructor
					</StyledCourseMetadata>
				</StyledCourseDescription>
			</StyledCourseSection>
			<StyledCourseSection>
				<LogoHolder>
					<PrincetonLogo />
				</LogoHolder>
				<StyledCourseDescription>
					<StyledCourseTitle>
						Intro to Ancient Philosophy
					</StyledCourseTitle>
					<StyledCourseMetadata>
						Princeton University | Fall 2019 | Sole Instructor
					</StyledCourseMetadata>
				</StyledCourseDescription>
			</StyledCourseSection>
			<StyledCourseSection>
				<LogoHolder>
					<RutgersLogo />
				</LogoHolder>
				<StyledCourseDescription>
					<StyledCourseTitle>
						Intro to Classical Greek Philosophy
					</StyledCourseTitle>
					<StyledCourseMetadata>
						Rutgers University | Fall 2018 | Sole Instructor
					</StyledCourseMetadata>
				</StyledCourseDescription>
			</StyledCourseSection>
		</StyledContentSection>
	</>
)

export default TeachingSection