import React from 'react';
import image from '../Images/WeChat Image_20211212023606.jpg';
import './MyProtfolio.css';
const MyProtfolio = () => {
    return (
        <div className='container-badsha'>
            <h1>Name:Meherab Hossen</h1>
            <h1>Email:meherabhossen45@gmail.com</h1>
            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                <div class="">
                    <img src={image} width="250" alt='' />
                </div>
            </section>
            <h3 className='background'>I'm Meherab recently i graduate from the university.My major was Computer Science.I want to be a full stack web developer.I want to reach my goal by working hard..</h3>
            <ul className='skill'>I have some skill as a web developer:
                <li>HTML,</li>
                <li>Raw CSS,</li>
                <li>Teilwind,Bootstrap</li>
                <li>React,React Route,React Bootstrap</li>
                <li>E6 of Javascript</li>
                <li>Node Js</li>
                <li>Mongodb</li>
                <li>Git</li>
                <li>Netlyfy</li>
                <li>Firebase</li>
            </ul>
            <p className='Link'>I did 20+ projectas as a developer</p>
            <p className='Link'>Such as:</p>
            <a className='Link' href=" https://assignment-11-6f437.web.app/">Link-1</a>
            <br />
            <a className='Link' href=" https://moonlit-frangipane-0139fc.netlify.app/">Link-2</a>
            <br />
            <a className='Link' href=" https://dulcet-praline-ca1196.netlify.app/">Link-2</a>
        </div >
    );
};

export default MyProtfolio;