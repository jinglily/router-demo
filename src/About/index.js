import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class About extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    this.refs.form.reset(p)

  }
  render () {
    return(
      <div className='about-wrap'>
        <div className='git-card'>
          <h3 style={{color:'#26A69A'}}>Search Git Info</h3>
          <form ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField ref='gitname' hintText="Hint Text" underlineFocusStyle={{color:'#26A69A'}}/>
            <RaisedButton label="Search" secondary={true} style={{marginLeft:'10px'}}/>
          </form>
        </div>
      </div>
    )
  }
}

export default About;
