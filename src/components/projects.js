import React, { Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
      super(props);
      this.state = { activeTab: 0 };
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/*project 1*/}
        <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.ippon.fr/content/images/2016/04/react-javascript.png) center / cover'}}>React project #1</CardTitle>
          <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>


        {/*project 2*/}
        <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.ippon.fr/content/images/2016/04/react-javascript.png) center / cover'}}>React project #2</CardTitle>
          <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>


        {/*project 3*/}
        <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.ippon.fr/content/images/2016/04/react-javascript.png) center / cover'}}>React project #3</CardTitle>
          <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>

        </div>
      );
    }else if(this.state.activeTab === 1){
      return(
      <div>this is WordPress</div>
    );
    }else if(this.state.activeTab === 2){
      return(
      <div>this is Symfony</div>
    );
    }else if(this.state.activeTab === 3){
      return(
      <div>this is java</div>
    );
    }
  }

  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>WordPress</Tab>
          <Tab>Symfony</Tab>
          <Tab>Java</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    );
  }
}

export default Projects;
