import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <br/><br />

        <div className="hr">
          <div className="row"></div>
        </div>

        <br /><br />

        <div className="info">
          <div className="row">
            <div className="col-lg-4" id="personnal">
              <p>connect with me</p>
              <h4>@clemritz</h4>
              <br /><br />
            </div>

            <div className="col-lg-4" id="media">
              <p>contact</p>
              <ul>
                <li id="lk"><a href="https://www.linkedin.com/in/clementritz/" target="_blank" rel="noopener noreferrer">lk</a></li>
                <li id="gh"><a href="https://www.github.com/clemritz/" target="_blank" rel="noopener noreferrer">gh</a></li>
                <li id="tw"><a href="https://www.twitter.com/clemritz/" target="_blank" rel="noopener noreferrer">x</a></li>
              </ul>

              <br /><br />
            </div>

            <div className="col-lg-4" id="address">
              <p>say hello</p>
              <h4>clement.ritz@orange.fr</h4>
              <br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
