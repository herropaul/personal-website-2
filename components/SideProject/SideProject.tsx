import React from 'react'
import {Section, SectionTitle, SectionText, SectionDivider} from '../../styles/GlobalComponents/index';
import { GridContainer, BlogCard, HeaderThree, TitleContent, Hr, Tag, TagList, HeaderFour } from './SideProjectElements';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {projects} from './constants';
import NextLink from 'next/link';
import {FaGithubAlt} from 'react-icons/fa';

export default function SideProject() {
    return (
        <Section id="projects">
            <SectionTitle>Projects I've worked on</SectionTitle>
            <GridContainer>
                {projects.map(({id, title, subtitle, image, description, gitlink, tags})=>(
                    <BlogCard key={id}>
                    <SectionText>
                        <TitleContent>
                            <HeaderThree>
                                {title} <HeaderFour>{subtitle}</HeaderFour>
                            </HeaderThree>
                            <Hr />
                        </TitleContent>
                        <LazyLoadImage src={image} width="500" height="500"/>
                        {description}
                        <NextLink href={gitlink}>
                            <a target="_blank" rel="noreferrer noopener">
                                <FaGithubAlt className=" text-white w-10 h-10 my-3 mx-auto hover:transition duration-500 hover:scale-125 sm:hover:scale-150"/>
                            </a>
                        </NextLink>
                        <TagList>
                            {tags.map((item, i) => (
                                <Tag key={i}>
                                    {item.tech}
                                    <span className={`${
                                    i % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                    } w-90 h-90 bg-white shadow-2xl m-4 rounded-full flex items-center p-4 `}>
                                        <LazyLoadImage src={item.img}/>
                                    </span>
                                </Tag>
                            ))}
                        </TagList>
                    </SectionText>
                    </BlogCard>
                ))}
            </GridContainer>
            <SectionDivider/>
        </Section>
    )
}
