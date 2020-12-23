import React from "react"
import styled from "styled-components"
import { StyledContentSection, StyledContentHeading } from "../section-helpers"
import { MUTED_TEAL } from "../colors"

const StyledDescription = styled.div`
  padding: 1em 0;
`

const StyledTitle = styled.h5`
  padding-bottom: .5em;
`

const StyledTextSection = styled.div`
  padding: .5em 0 1em 0;
`

const StyledAward = styled.p`
  font-family: 'Raleway';
  color: ${MUTED_TEAL};
  // text-align: right;
  line-height: 5px;
`

const ResearchSection = () => (
	<StyledContentSection>
		<a name="research" />
	  <StyledContentHeading>Research</StyledContentHeading>
	  	<StyledTextSection>
		    <StyledTitle>“What’s the Good of Perfected Passion? Thomas Aquinas on Attentiveness & the <em>Filiae Luxuriae</em>”</StyledTitle>
		    <StyledAward><b>Forthcoming</b> | American Catholic Philosophical Quarterly, Spring 2021 (Volume 95, Number 2)</StyledAward>
		    <StyledAward><b>Winner</b> | American Catholic Philosophical Association 2020 Rising Scholar Essay Contest</StyledAward>
		    <StyledDescription>I raise a puzzle about Thomas’s views on the passions I call the <em>instrumentalizing problem</em>: can well-ordered passions contribute to good human activity beyond merely expressing or rendering more effective the independent work of intellect and will? If not, does that not raise the risk that we are merely handicapped angels? I develop a response by examining Thomas’s discussion of the <em>filiae luxuriae</em>, intellectual and volitional flaws arising from lust. I draw on Thomas’s understanding of one <em>filia</em>, blindness of mind, to help sketch an account of the good habits it opposes: the acquired virtue I term attentiveness and the corresponding Spiritual gift of understanding. These good habits, I argue, render their bearers responsive to natural and supernatural reasons that guide them in the conduct of life. By partly constituting these habits, well-ordered passion makes an indispensable contribution to human activity at its best.</StyledDescription>
	    </StyledTextSection>
	    <StyledTextSection>
		    <StyledTitle>“Self-Control & Second-Best Practical Activity in Aristotle’s <em>Nicomachean Ethics</em>”</StyledTitle>
		    <StyledAward><b>Under Review</b></StyledAward>
		    <StyledDescription>If the <em>Nicomachean Ethics</em> presents both virtue and self-control (<em>enkrateia</em>) as leading to the right action for the right reason, what makes self-control a distinct, second-best character state?  I argue that enkratic practical reasoning and action involve <em>impeding impressions</em>: false appearances of bad options as good.  These appearances impair enkratic practical reasoning and introduce a gap between the motivating reason for an enkratic action and the normative reason for performing it.  Unlike the virtuous case, the reason why an action is right does not suffice to motivate enkratic action; the rejection of a bad alternative, though otiose in explaining why the action is right, is psychologically necessary for enkratic people to act accordingly.</StyledDescription>
	    </StyledTextSection>
	</StyledContentSection>
)

export default ResearchSection