import React from 'react';
import {Link} from 'react-router';
class LeftNav extends React.Component {
  render () {
    return(
      <div className='leftnav-wrap'>
        <h3>jinglily’s {this.props.title}</h3>
        <Link to='/' activeStyle={{backgroundColor:'#00695C'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link>
        <Link to='/Blog' activeStyle={{backgroundColor:'#00695C'}}><span className="glyphicon glyphicon-hdd" aria-hidden="true"></span>Blog</Link>
        <Link to='/Work' activeStyle={{backgroundColor:'#00695C'}}><span className="glyphicon glyphicon-comment" aria-hidden="true"></span>Work</Link>
        <Link to='/About' activeStyle={{backgroundColor:'#00695C'}}><span className="glyphicon glyphicon-leaf" aria-hidden="true"></span>About</Link>

      </div>
    )
  }
}

export default LeftNav;
