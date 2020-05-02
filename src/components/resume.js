import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.pngkey.com/png/full/804-8049827_input-black-male-avatar.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Antoine NOGOUP LOPASON</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              I am a fifth year computer science student at SUPINFO International University (Paris). I'm in
              search for an internship in web development for a period of 6 months from April
              2020. I am creative, hardworking, respectful, persevering, with great listening skills, flexible to
              change. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>23 rue Henri Barbusse, 95100 Argenteuil </p>
            <h5>Phone</h5>
            <p>(+33) 625786335</p>
            <h5>Email</h5>
            <p>nogoup.antoine@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={2020}
              schoolName="SUPINFO"
              schoolDescription="Master of Science | Expert en Informatique et Systèmed'Informations"
               />

               <Education
                 startYear={2018}
                 endYear={2015}
                 schoolName="IAI"
                 schoolDescription="Bachelor In Computer Science, Option Software Engineering (bac +3)"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Personal project"
              jobDescription="burger construction project"
              jobDescriptions="Technical Environment: HTML/CSS,ReactJS"

              />

              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Deep learning"
                jobDescription="build from scratch a convolutional neural network"
                jobDescriptions="Technical Environment: tensorflow, keras, python"
                />

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="BlockChain"
                jobDescription="contruction and implementation of a block chain, contruction of a wallet,  "
                jobDescriptions="Technical Environment: Docker, Angular, spring"
                />

              <Experience
                startYear={2018}
                endYear={2018}
                jobName="web developer"
                jobDescription=" conception and realisation of an e-comerce platfrom"
                jobDescriptions="Technical Environment: mysql, symfony, HTML/CSS"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={70}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="Symfony"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={40}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
