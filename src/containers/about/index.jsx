import React from 'react';
import './style.scss';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import PageHeaderContent from '../../components/PageHeaderContent';
import { DiReact , DiMongodb,DiCode,DiChrome} from 'react-icons/di';

const PersonalDetails = [
    {
        label: "Name",
        value: "Gul-e-Nayab",
    },
    {
        label: "Address",
        value: "Mardan, KPK, Pakitan",
    },
    {
        label: "Email",
        value: "gulenayab1890@gmail.com",
    },
    {
        label: "Contact No",
        value: "0315-9576753",
    },
    {
        label: "Linkedin",
        value: "https://www.linkedin.com/in/gul-e-nayab-1b0863250/",
    }
];
console.log(PersonalDetails)
const jobSummary = "Highly skilled Fullstack Developer with one year of experience, proficient in the MERN stack, Next.js, and NestJS. Holds a Bachelor's degree in Computer Systems Engineering from UET Peshawar. Adept at building scalable and efficient web applications, integrating modern technologies, and ensuring high-quality code. Passionate about continuous learning and delivering robust software solutions."


const About = () => {


    return (
        <section id="about" className='about'>
            <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
            <div className='about__content'>
                <div className='about__content__personalWrapper'>
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateX(-900px)'
                    }}
                    end={{
                        transform: 'translatex(0px)'
                    }}
                >
                    <h3>FullStack Developer</h3>
                    <p>{jobSummary}</p> 
                </Animate>
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateX(500px)'
                    }}
                    end={{
                        transform: 'translatex(0px)'
                    }}
                >
                    <h3 className='personalInformationHeaderText'>Personal Information</h3>
                    <ul>
                        {
                            PersonalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className='title'>{item.label}</span>
                                    <span className='value'>{item.value}</span>

                                </li>
                            ))
                        }
                    </ul>
                </Animate>
                </div>
                
                <div className='about__content__servicesWrapper'>
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateX(600px)'
                    }}
                    end={{
                        transform: 'translatex(0px)'
                    }}
                >
                    <div className='about__content__servicesWrapper__innerContent'>
                    <div>
                        <DiReact size={60} color='var(--yellow-theme-main-color)'/>
                    </div>
                    <div>
                        <DiCode size={60} color='var(--yellow-theme-main-color)'/>
                    </div>
                    <div>
                        <DiMongodb size={60} color='var(--yellow-theme-main-color)'/>
                    </div>
                    <div>
                        <DiChrome size={60} color='var(--yellow-theme-main-color)'/>
                    </div>

                    </div>
                    </Animate>
                </div>
                
            </div>
        </section>
    )
}
export default About;