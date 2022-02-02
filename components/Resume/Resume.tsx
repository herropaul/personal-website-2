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
                            <li>{title}</li>
                            {names.map((item, i) => (
                                <ul key={i}>
                                    <li className="text-base font-sans">
                                        {item}
                                        <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                                    </li>
                                </ul>
                            ))}
                        </ul>
                    ))}
                </GridContainer>
            </SkillsContainer>
        </Section>
    )
}
