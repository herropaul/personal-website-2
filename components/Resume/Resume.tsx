import React from 'react'
import { Section, SectionTitle} from '../../styles/GlobalComponents'
import {GridContainer, Header, SkillsContainer} from './ResumeElements';
import {skills} from './constants';

export default function Resume() {
    return (
        <Section id="resume">
            <SectionTitle>
                My Resume
            </SectionTitle>
            <SkillsContainer>
                <Header>Skills</Header>
                <GridContainer>
                    {skills.map(({id, title, names}) => (
                        <ul key={id}>
                            <li className="pb-3">{title}</li>
                            {names.map((item, i) => (
                                <ul key={i}>
                                    <li className="text-base text-gray-300 font-light md:text-lg">
                                        {item}
                                    </li>
                                </ul>
                            ))}
                        </ul>
                    ))}
                </GridContainer>
                <section className="pt-8 pb-20 grid grid-cols-2 gap-x-14">
                    <div>
                        Education
                        <div className="pt-4 text-sm text-gray-300 md:text-base">
                            <p>May 2022</p>
                            <p className="pt-3 font-light">California State University of Long Beach</p>
                            <p className="pt-3 font-medium">Bachelor of Science in Computer Science</p>
                        </div>
                    </div>
                    <div>
                        Experience
                        <div className="pt-4 text-gray-300">
                            <p className="text-xs md:text-base">June  2021 - August 2021</p>
                            <p className="text-sm md:text-lg font-bold pt-2 text-white">Beautycounter</p>
                            <p className="text-xs md:text-base pt-1">Frontend Engineer Intern</p>
                            <ul className="text-xs md:text-sm pt-3 leading-relaxed">
                                <li> - Implemented Javascript to Improve the Search Engine Optimization (SEO) performance for the company’s Ecommerce platform.</li>
                                <li className="pt-3"> - Assisted team of 6 by implementing and executing multiple unit tests across code base using Jest. </li>
                                <li className="pt-3"> - Cross functional collaboration with design, backend and product teams to implement proper unit tests.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </SkillsContainer>
        </Section>
    )
}
