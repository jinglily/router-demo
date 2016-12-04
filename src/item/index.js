import React from 'react';
import marked from 'marked';
import axios from 'axios';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

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
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let content=this.state.data.length==0 ? <Loading /> : <div dangerouslySetInnerHTML={{__html:marked(this.state.data)}} />
    return(
      <div className='post-wrap' style={{flexGrow:'1'}}>
        {content}
      </div>
    )
  }
}

export default Item;
