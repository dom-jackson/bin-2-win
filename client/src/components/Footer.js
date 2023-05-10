import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { Container } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Container as="footer">
      <div>
        <div>
          <h3>An application created by Dominic Jackson</h3>
          <div>
            <ul className="icons">
              <li>
                <a href="https://github.com/dom-jackson">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dominicjackson92/">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              <li>
                <a href="mailto:dommaj32@gmail.com">
                  <FontAwesomeIcon icon={faGoogle} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
