import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div id="footer" className="footer">
				<div className="contact-footer__img">
					<div>
						<img alt="footer" src={require('../../assets/images/facebook-logo.svg')}/>
					</div>
					<div>
						<img alt="footer" src={require('../../assets/images/twitter-logo.svg')}/>
					</div>
					<div>
						<img alt="footer" src={require('../../assets/images/youtube-logo.svg')}/>
					</div>
					<div>
						<img alt="footer" src={require('../../assets/images/instagram-logo.svg')}/>
					</div>
				</div>
        <div>
					<ul>
						<li>
							<a>HOME</a>
						</li>
						<li>
							<a>BLOG</a>
						</li>
						<li>
							<a>CONTACT US </a>
						</li>
						<li>
							<a>ABOUT US </a>
						</li>
						<li>
							<a>COOKIE POLICY</a>
						</li>
					</ul>
					<div className="copy-right">© 2018 Madara Inc. All rights reserved</div>
        </div>
      </div>
    );
  }
}

export default Footer;
