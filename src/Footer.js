import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';
library.add(faGithub,faTwitter);

class Footer extends React.Component {
    render() {
      return (
        <div className="article">
        <footer className="site-footer">
            &copy; by Scrow 2020   
            <a href="https://github.com/S-crow"><FontAwesomeIcon style={{'color':'white', 'marginLeft': '20px'}} icon={faGithub} /></a>
            <a href="https://twitter.com/__Scrow__"><FontAwesomeIcon style={{'color':'white', 'marginLeft': '20px'}} icon={faTwitter} /></a>
        </footer>
        </div>
      );
    }
  }

  export default Footer;