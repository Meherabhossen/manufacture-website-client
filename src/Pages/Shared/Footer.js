import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { ChatAltIcon, LocationMarkerIcon, MailIcon, PhoneIcon, PhotographIcon, PlayIcon } from '@heroicons/react/solid'
const Footer = () => {
    return (
        <div className='footer block '>
            <div className='personalIcon'>
                <div className='flex'><a href=""><LocationMarkerIcon className='Icon'></LocationMarkerIcon></a>
                    <b> Dhaka-1205 , Bangladesh</b><br />
                </div>
                <div className='flex'>
                    <a href=""><PhoneIcon className='Icon'></PhoneIcon></a><b> Helpline:   +8801735123451, +8801574563201</b>
                </div>
                <div className='flex'>
                    <a href="http://"><MailIcon className='Icon'></MailIcon></a><b> Email : meherabhossen45@gmail.com</b>
                </div>
            </div>
            <div className='flex'>
                <a href="https://www.google.com/">
                    <ChatAltIcon className='Icon'></ChatAltIcon></a>
                <a href="https://www.tidmanlegal.com/wp-content/uploads/sites/29/2021/03/Source-Code-source-4280758_1920.jpg"><PhotographIcon className='Icon'></PhotographIcon></a>
                <a href="https://youtu.be/DlSBC_JNuM0"><PlayIcon className='Icon'></PlayIcon></a>
            </div>
            <div className='copyright'>
                <h1>Copyrite <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2022 Meherabs Website Website</h1>
            </div>
        </div>
    );
};

export default Footer;
