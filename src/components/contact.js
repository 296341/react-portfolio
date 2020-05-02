import React, { Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3>Antoine NOGOUP LOPASON</h3>
            <img
              src="https://www.pngkey.com/png/full/804-8049827_input-black-male-avatar.png"
              alt= "avatar"
              style={{height: '250px'}}
            />

            <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
            i am Antoine NOGOUP currently a student a Supinfo
            internantional univercity ksodfqin qdonfiqpkdf dfoqnsdfi sdfoqnid
            sdfnqodifn qdqdonfqoef qdsfoniqefq
            nsqomdifjqiosf nqsdofined skjdfkifsdnfio qkdsnfoqsndf
            </p>
          </Cell>
          <Cell col={6}>
            <h3>Contact Me </h3>
            <hr />
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-phone-square" aria-hidden="true"/>
                (+33)625786335
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-envelope" aria-hidden="true"/>
                nogoup.antoine@gmail.com
              </ListItemContent>
              </ListItem>
              <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-skype" aria-hidden="true"/>
                  antoine nogoup
                  </ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
