import React from 'react'
import {Section, SectionTitle, SectionText} from '../../styles/GlobalComponents/index';
import { GridContainer, BlogCard, HeaderThree, TitleContent, Hr, Tag, TagList, ImageContainer } from './SideProjectElements';
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
                                    <span className={`${
                                    i % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                    } w-100 h-100 bg-white shadow-2xl m-4 rounded-full flex items-center p-7 `}>
                                        <LazyLoadImage src={item.img}/>
                                    </span>
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
