import React from 'react';
import marked from 'marked';
import axios from 'axios';
import Loading from './../component/loading';
class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    let address = this.props.params.title;
    axios.get(`https://raw.githubusercontent.com/jinglily/router-demo/master/data/${address}.md?666`)
         .then(res => this.setState({data:res.data}))
  }
  render () {
    let content=this.state.data.length==0 ? <Loading /> : <div dangerouslySetInnerHTML={{__html:marked(this.state.data)}} />
    return(
      <div style={{flexGrow:'1'}}>
        {content}
      </div>
    )
  }
}

export default Item;