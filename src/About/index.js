import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Loading from './../component/loading.js';
import ShowGit from './../component/ShowGit.js';

import axios from 'axios';
class About extends React.Component {
  constructor(){
    super();
    this.state = {
      data:{},
      //0没搜索  1：后台没响应数据为接受   2：数据接受完
      wait:0
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState(
      {wait:1}
    )
    let value = this.refs.gitname.getValue();
     axios.get(`https://api.github.com/users/${value}`)
       .then( res => this.setState({data:res.data,wait:2}) )
       .catch( error => {alert(error);this.setState({wait:0})} )
     this.refs.form.reset();

  }
  render () {

    let showInfo = this.state.wait==0 ? null : this.state.wait==1 ? <Loading /> : <ShowGit data={this.state.data}/>

    return(
      <div className='about-wrap'>
        <div className='git-card'>
          <h3 style={{color:'#26A69A'}}>Search Git Info</h3>
          <form ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField ref='gitname' hintText="Hint Text" underlineFocusStyle={{color:'#26A69A'}}/>
            <RaisedButton label="Search" secondary={true} style={{marginLeft:'10px'}}/>
          </form>
          {showInfo}
        </div>
      </div>
    )
  }
}

export default About;
