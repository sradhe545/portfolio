import React from 'react';
import {
    StatsContCont,
    StatsCont,
    StatsContDiv,
    StatsContH1,
    StatsContH3,
    LastStat,
} from './Styles';
import { Container } from '../../SharedStyles/SharedStyles';
import Calendar from '../Calendar/Calendar';
const Stats = () => {
    return (
        <Container>
            <div style={{display:"flex",justifyContent:"center"}}><h1 style={{color:"#008080"}}>Statistics</h1></div>
              
            <StatsContCont>
                <StatsCont>
                    <StatsContDiv className='dom-attribute-demo'>
                        <StatsContH1>1000+</StatsContH1>
                        <StatsContH3>Hours of coding</StatsContH3>
                    </StatsContDiv>
                    <StatsContDiv>
                        <StatsContH1>50+</StatsContH1>
                        <StatsContH3>Git Commits</StatsContH3>
                    </StatsContDiv>
                    <StatsContDiv>
                        <StatsContH1>5+</StatsContH1>
                        <StatsContH3>Projects</StatsContH3>
                    </StatsContDiv>
                    <LastStat>
                        <StatsContH1>100+</StatsContH1>
                        <StatsContH3>Hours of Soft Skill</StatsContH3>
                    </LastStat>
                </StatsCont>
            </StatsContCont>
            <Calendar/>
        </Container>
    );
};
export default Stats;
