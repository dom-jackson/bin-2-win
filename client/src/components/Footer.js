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
    <Container as="footer" style={{ marginTop: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <div>
          <h3>Thank you for using this application</h3>
          <br />
          <h3>This application was built by Dominic Jackson</h3>
          <div>
            <ul
              className="icons"
              style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px',
              }}
            >
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
