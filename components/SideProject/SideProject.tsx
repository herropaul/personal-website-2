import React from 'react'
import {Section, SectionTitle, SectionText, SectionDivider} from '../../styles/GlobalComponents/index';
import { GridContainer, BlogCard, HeaderThree, Img } from './SideProjectElements';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {projects} from './constants';

export default function SideProject() {
    return (
        <Section id="projects">
            <SectionTitle>Projects I've worked on</SectionTitle>
            <GridContainer>
                {projects.map((project)=>(
                    <BlogCard key={project.id}>
                        <SectionText>
                            <HeaderThree>{project.title}</HeaderThree>
                            <br/>
                            <LazyLoadImage src={project.image} width="500" height="500"/>
                            {project.description}
                        </SectionText>
                    </BlogCard>
                ))}
            </GridContainer>
        </Section>
    )
}
