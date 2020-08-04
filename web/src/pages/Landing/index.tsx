import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';

import logoimg from '../../assets/images/logo.svg';
import landingimg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/study.svg';
import giveClassesIcon from '../../assets/images/give-classes.svg';
import purpleHeartIcon from '../../assets/images/purple-heart.svg';



function Landing(){
    return (
        
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoimg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={landingimg} alt="Plataforma de Estudos" className="hero-image"/>
            
            <div className="buttons-container">
                <Link to="/study" className="study">
                    <img src={studyIcon} alt="Estudar"/>
                    Estudar
                </Link>

                <Link to="/give-classes" className="give-classes">
                    <img src={giveClassesIcon} alt="Estudar"/>
                    Dar Aula
                </Link>
            </div>

            <span className="total-connections">
                Total de 200 conexões já realizadas
                <img src={purpleHeartIcon} alt="Coração roxo"/>
            </span>
        
            </div>
        </div>
    );
};

export default Landing;