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
                            <li className="pb-4">{title}</li>
                            {names.map((item, i) => (
                                <ul key={i}>
                                    <li className="text-base font-sans">
                                        {item}
                                    </li>
                                </ul>
                            ))}
                        </ul>
                    ))}
                </GridContainer>
                <section className="pt-8 grid grid-cols-2 gap-3">
                    <div>Education</div>
                    <div>Experience</div>
                </section>
            </SkillsContainer>
        </Section>
    )
}
