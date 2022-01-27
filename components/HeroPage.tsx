import {Section, SectionTitle, SectionText, SectionDivider} from '../styles/GlobalComponents/index';
import Typist from 'react-typist';
import React from 'react';

const HeroPage = () => {
    return (
        <Section id="about">
          <SectionTitle>
            <Typist cursor={{hideWhenDone: true}}>
              Welcome To 
              <Typist.Delay ms={500}/>
              <br/>
              My 
              <Typist.Delay ms={500}/>
              <br/>
              Personal Website 
            </Typist>
          </SectionTitle>
          <SectionText>
            Hello friends, my name is Paul and I'm currently finishing up my undergrad as I'm making this website. <br/>
            Little bit about me is that I am a coffee enthusiast, enjoy gaming, and passionate about 
            web development
          </SectionText>
          <SectionDivider></SectionDivider>
        </Section>
    );
}

export default HeroPage;