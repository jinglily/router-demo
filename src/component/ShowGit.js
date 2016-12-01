import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

class ShowGit extends React.Component {

  render () {
    let info = this.props.data;
    const style = {
                  paper:{ height: 120,
                    width: 120,
                    margin: 20,
                    textAlign: 'center',
                    display: 'inline-block',},
                  imageInput: {
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    width: '100%',
                    opacity: 0
                  }
                  };
    return(
      <div style={{textAlign:'center'}}>
        <Paper style={style.paper} zDepth={2} circle={true}>
          <img src={info.avatar_url} style={{width:'100%',height:'100%',borderRadius:'60px'}} />
        </Paper>
        <h3>{info.login}</h3>
        <div className='show-git'>
          <p>followers<br />{info.followers}</p>
          <p>following<br />{info.following}</p>
          <p>public_repos<br />{info.public_repos}</p>
        </div>
      </div>
    )
  }
}

export default ShowGit;
