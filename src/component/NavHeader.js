import React from 'react';


class NavHeader extends React.Component {
  
  render () {
    console.log(this.context.router)

    return(
      <div className='nav-header'>
        <button type="button" onClick={this.context.router.goBack.bind(this)}>
          <span className="glyphicon glyphicon-arrow-left" aria-hidden="true">Back</span>
        </button>
        <h3>Jinglily’s {this.props.title}</h3>
        <button type="button">
          <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}
NavHeader.contextTypes ={
  router:React.PropTypes.object
}
export default NavHeader;
