import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => (
  <div className="row margin-top">
          <div className="col s12">
            <ul class="contact">
              <li>
                <a href="mailto:akelstrom@gmail.com"><SiGmail />EMAIL</a>
              </li>
              <li>
                <a href="https://github.com/akelstrom"
                  ><FaGithub /> GITHUB</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/akelstrom/"
                  > <FaLinkedin />LINKEDIN</a
                >
              </li>
            </ul>
          </div>
        </div>
);

export default Footer;
