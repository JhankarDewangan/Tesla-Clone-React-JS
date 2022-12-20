import React from 'react'
import styled from"styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
    <Section 
    title= "Model S"
    description="Schedule a Test drive"
    backgroundImg="model-s.jpg"
    LeftBtnText="Custom Order"
    RightBtnText="Existing Inventory"></Section>
    <Section
    title= "Model Y"
    description="Schedule a Test drive"
    backgroundImg="model-y.jpg"
    LeftBtnText="Custom Order"
    RightBtnText="Existing Inventory"

    
    
    ></Section>
    <Section
     title= "Model 3"
     description="Schedule a Test drive"
     backgroundImg="model-3.jpg"
     LeftBtnText="Custom Order"
     RightBtnText="Existing Inventory">
     </Section>
    <Section
     title= "Model X"
     description="Schedule a Test drive"
     backgroundImg="model-x.jpg"
     LeftBtnText="Custom Order"
     RightBtnText="Existing Inventory">
     </Section>
     <Section
    title= "Lowest Cost Solar Panels in America"
    description="Order Online for Touchless delivery"
    backgroundImg="solar-panel.jpg"
    LeftBtnText="Custom Order"
    RightBtnText="Existing Inventory"

    
    
    ></Section>
    <Section
    title= "Solar for New Roofs"
    description="Order Online for Touchless delivery"
    backgroundImg="solar-roof.jpg"
    LeftBtnText="Custom Order"
    RightBtnText="Existing Inventory"

    
    
    ></Section>
    <Section
    title= "Accessories"
    description=""
    backgroundImg="accessories.jpg"
    LeftBtnText="Custom Order"
  

    
    
    ></Section>
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`