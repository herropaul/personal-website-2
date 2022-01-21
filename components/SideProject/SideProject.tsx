import React from 'react'
import {Section, SectionTitle, SectionText, SectionDivider} from '../../styles/GlobalComponents/index';
import { GridContainer, Img } from './SideProjectElements';
import {projects} from './constants';

export default function SideProject() {
    return (
        <Section id="projects">
            <SectionTitle>Projects I've worked on</SectionTitle>
            <GridContainer>
                {projects.map((project)=>(
                    <SectionText>
                        {project.title}
                        <br/>
                        <Img src={project.image}></Img>
                        {project.description}
                    </SectionText>
                ))}
            </GridContainer>
        </Section>
    )
}
