import {Section, SectionTitle, SectionText, SectionDivider} from '../styles/GlobalComponents/index';
import Typical from 'react-typical'
import React from 'react';

const HeroPage = () => {
    return (
        <Section>
          <SectionTitle>
            Welcome To <br/>
            My <Typical steps={['Personal Website', 500]} loop={Infinity} wrapper="p"/>
          </SectionTitle>
          <SectionText>
            Hello friends, I'm Paul and I'm currently finishing up my undergrad as I'm making this website. <br/>
            Little bit about me is that I am a coffee enthusiast, enjoy gaming, and passionate about 
            web development :)
          </SectionText>
          <SectionDivider></SectionDivider>
        </Section>
    );
}

export default HeroPage;