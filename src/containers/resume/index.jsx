import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/PageHeaderContent';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {} from 'react-vertical-timeline-component/style.min.css'
import data from './utils.js';
import {MdWork,MdSchool} from 'react-icons/md'
import './style.scss';

const Resume = () => {
    return (
        <section id="resume" className='resume'>
            <PageHeaderContent headerText="My Resume" icon={<BsInfoCircleFill size={40} />} />

            <div className='timeline'>
                <div className='timeline__experience'>
                    <h3 className='timeline__experience__header-text'>Experience</h3>
                    <VerticalTimeline layout='1-column' lineColor='var(--yellow-theme-main-color)'>
                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement key={i} className='timeline__experience__vertical-timeline-element'
                                contentStyle={{
                                    background:'none',
                                    color:'var(--yellow-theme-sub-text-color)',
                                    border:'1.5px solid var(--yellow-theme-main-color)'
                                }}
                                icon={<MdWork/>}
                                iconStyle={{
                                    background:'#181818',
                                    color:'var(--yellow-theme-main-color)'
                                }}
                                >
                                    <div className='verticle-timeline-element-title-wrapper'>
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <h4>
                                            {item.subTitle}
                                        </h4>
                                        
                                    </div>
                                    <p className='verticle-timeline-element-description'>
                                            {item.description}
                                        </p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
                <div className='timeline__education'>
                    <h3 className='timeline__education__header-text'>Education</h3>
                    <VerticalTimeline layout='1-column' lineColor='var(--yellow-theme-main-color)'>
                        {
                            data.education.map((eduItem, j) => (
                                <VerticalTimelineElement key={j} className='timeline__experience__vertical-timeline-element'
                                contentStyle={{
                                    background:'none',
                                    color:'var(--yellow-theme-sub-text-color)',
                                    border:'1.5px solid var(--yellow-theme-main-color)'
                                }}
                                icon={<MdSchool/>}
                                iconStyle={{
                                    background:'#181818',
                                    color:'var(--yellow-theme-main-color)'
                                }}
                                >
                                    <div className='verticle-timeline-element-title-wrapper'>
                                        <h3>
                                            {eduItem.title}
                                        </h3>
                                        <h4>
                                            {eduItem.subTitle}
                                        </h4>
                                        
                                    </div>
                                    <p className='verticle-timeline-element-description'>
                                            {eduItem.description}
                                        </p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                     
                </div>
            </div>
        </section>
    );
}

export default Resume;
