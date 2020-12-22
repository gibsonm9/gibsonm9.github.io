import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingSection from "../components/sections/landing"
import AboutSection from "../components/sections/about"
import ResearchSection from "../components/sections/research"
import TeachingSection from "../components/sections/teaching"
import PictSection from "../components/sections/pict"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingSection />
    <AboutSection />
    <ResearchSection />
    <TeachingSection />
    <PictSection />
  </Layout>
)

export default IndexPage
