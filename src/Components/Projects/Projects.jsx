import React from 'react';
import { FaGithub, FaLink, FaNodeJs } from 'react-icons/fa';
import {
    ProjectDiv,
    Row,
    ServiceBox,
    ServiceBoxHeader,
    ServiceBoxP,
    A,
    BoxDiv,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { FaHtml5, FaReact, FaJs, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiRedux, SiHeroku } from 'react-icons/si';


import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
    const projects = [
        {
            id: 1,
            project_name: 'Yoox Clone',
            image: 'https://i.ibb.co/XYWDdYL/Screenshot-1341.png',
            project_desc:
                'This  is an E-Commerce retailer famous worldwide for its latest fashion and trends in menswear and womenswear.',
            deploy_link: 'https://yoox-clone-by-exclusive.vercel.app/',
            repo_link: 'https://github.com/Hashal890/Exclusive-Yoox-Clone',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                <FaNodeJs/>,
                <FaReact/>
            ],
        },
        {
            id: 2,
            project_name: 'Asos Clone',
            image: "https://i.ibb.co/RBK4Y7B/Screenshot-1103.png",
            project_desc:
              `This  is an E-Commerce retailer famous worldwide for its latest fashion and trends in menswear and womenswear.`
              ,
            deploy_link: 'https://zingy-syrniki-a672bb.netlify.app/',
            repo_link: 'https://github.com/Aman103767/Unit-3-project',
            tech_stack: [     
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
            ],
        },
        {
            id: 3,
            project_name: 'Tanner Goods Clone',
            image: 'https://i.postimg.cc/RhVQWt8q/tanner.png',
            project_desc:
                `Tanner Goods is a E-Commerce website offers leather-based products such as wallets and bags`,
            deploy_link: 'https://tannerclone.vercel.app/',
            repo_link: 'https://github.com/sradhe545/Tanner-Clone',
            tech_stack: [
                <SiHeroku/>,
                <FaReact/>,
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
            ],
        }
    ];

    return (
        <Container className='projects'>
            <ProjectDiv>
                <Common>
                    <H1>Projects</H1>
                </Common>
                <Row>
                    {projects.map((item) => (
                        <BoxDiv key={uuidv4()}>
                            <ServiceBox>
                                <img
                                    src={item.image}
                                    alt='icon'
                                    style={{ width: '100%', height:"40%" }}
                                />
                                <div style={{ margin: '25px' }}>
                                    <ServiceBoxHeader
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.project_name}
                                    </ServiceBoxHeader>
                                    <ServiceBoxP>
                                        {item.project_desc}
                                    </ServiceBoxP>
                                    {/* <a href="">Read more</a> */}
                                    <div
                                        style={{
                                            margin: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            
                                        }}
                                    >
                                        {item.tech_stack.map((item) => (
                                            <div
                                                key={uuidv4()}
                                                style={{marginLeft:"10px"}}
                                                className='iconsTechStack'
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div >
                                    <A
                                        href={item.repo_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaGithub /> Code
                                    </A>
                                    <A
                                        href={item.deploy_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaLink /> Demo
                                    </A>
                                </div>
                            </ServiceBox>
                        </BoxDiv>
                    ))}
                </Row>
            </ProjectDiv>
        </Container>
    );
};

export default Projects;
