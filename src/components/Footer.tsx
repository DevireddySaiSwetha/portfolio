import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/DevireddySaiSwetha" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/saiswetha23/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio built for <a href="https://github.com/DevireddySaiSwetha" target="_blank" rel="noreferrer">Sai Swetha Devireddy</a> with 💜</p>
    </footer>
  );
}

export default Footer;