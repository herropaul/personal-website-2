import React from 'react'
import {Section, SectionTitle, SectionText, SectionDivider} from '../../styles/GlobalComponents/index';
import { GridContainer, BlogCard, HeaderThree, TitleContent, Hr, Img, Tag, TagList } from './SideProjectElements';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {projects} from './constants';

export default function SideProject() {
    return (
        <Section id="projects">
            <SectionTitle>Projects I've worked on</SectionTitle>
            <GridContainer>
                {projects.map(({id, title, image, description, tags})=>(
                    <BlogCard key={id}>
                    <SectionText>
                        <TitleContent>
                            <HeaderThree>{title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <LazyLoadImage src={image} width="500" height="500"/>
                        {description}
                        <TagList>
                            {tags.map((item, i) => (
                                <Tag key={i}>
                                    {item.tech}
                                    <LazyLoadImage src={item.img} width="300" height="300"/>
                                </Tag>
                            ))}
                        </TagList>
                    </SectionText>
                    </BlogCard>
                ))}
            </GridContainer>
        </Section>
    )
}
