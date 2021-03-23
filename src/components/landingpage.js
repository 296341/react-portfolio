import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class  Landing extends Component {
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.pngkey.com/png/full/804-8049827_input-black-male-avatar.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full stack develloper</h1>

              <hr />

              <p>HTML/CSS/PHP | JavaScript | ReactJS | Python | MySQL | Sring boot  </p>

              <div className="social-links">
              {/*linkedin*/}
                <a href ="https://www.linkedin.com/in/antoine-nogoup-lopason-194034172/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

              {/*github*/}
                <a href ="https://github.com/296341" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              {/*freecodecamp*/}
                <a href ="https://www.linkedin.com/in/antoine-nogoup-lopason-194034172/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default  Landing;
