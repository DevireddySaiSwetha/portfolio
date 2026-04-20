import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <div style={{
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #5000ca, #00b4d8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '4rem', color: 'white', fontWeight: 'bold'
          }}>SS</div>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/DevireddySaiSwetha" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/saiswetha23/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:devireddysaiswetha@gmail.com"><EmailIcon/></a>
          </div>
          <h1>Sai Swetha Devireddy</h1>
          <p>Senior Backend Software Engineer</p>
          <p style={{fontSize: '0.9em', marginTop: '10px', opacity: 0.8}}>Cloud-Native | Microservices | Java · Spring Boot | AWS · GCP · Azure</p>
          <div className="phone-contact" style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px'}}>
            <PhoneIcon style={{fontSize: '1.2em', color: '#ffffff'}}/>
            <a href="tel:+17744186971" className="phone-number">+1 (774) 418-6971</a>
          </div>
          <div className="mobile_social_icons">
            <a href="https://github.com/DevireddySaiSwetha" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/saiswetha23/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:devireddysaiswetha@gmail.com"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
