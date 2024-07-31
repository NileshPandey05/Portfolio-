import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className='font-medium sm:text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>{btnText}</Link>
    <img src={arrow} className='w-4 h-4 object-contain' />
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Nilesh</span>👋
      <br />
      A software Engineer
    </h1>
  ),
  2: (
    <InfoBox 
        text="About"
        link="/about"
        btnText="Visit my Portfolio"
    />
  ),
  3: (
    <InfoBox 
        text="Project"
        link="/project"
        btnText="Learn More"
    />
  ),
  4: (
    <InfoBox 
        text="Need a project done or looking for a dev? I'm just a few keystrokes away"
        link="/contact"
        btnText="Learn More"
    />
  ),
};



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo