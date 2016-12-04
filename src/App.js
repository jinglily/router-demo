import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
import LeftNav from './component/LeftNav';
class App extends React.Component {
  constructor(){
    super();
    this.state ={
      title:'Home',
      showLeftNav:false
    }
  }
  getChildContext(){
    return {muiTheme:getMuiTheme()}
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  componentWillMount(){
    this.setTitle();
    this.setNavBar();
  }
  setNavBar(){
    this.setState({
      showLeftNav:window.innerWidth>760 ? true : false})

  }
  componentDidMount(){
    window.onresize=this.setNavBar.bind(this)

    }

  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true) ? 'Home' :
            this.props.router.isActive('/Blog') ? 'Blog' :
            this.props.router.isActive('/Work') ? 'Work' :
            this.props.router.isActive('/About') ? 'About' : 'Blog'
    })
  }

  render () {
    return(
      <div className="my-wrap">
        {this.state.showLeftNav ? <LeftNav title={this.state.title}/> : <NavHeader title={this.state.title}/>  }

        <div className="main">
          {this.props.children}
        </div>

        {this.state.showLeftNav ? null : <NavFooter/>  }
      </div>
    )
  }
}
App.childContextTypes={
  muiTheme:React.PropTypes.object
}
export default App;
