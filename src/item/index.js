import React from 'react';
import marked from 'marked';
class Item extends React.Component {
  render () {
    console.log(this.props)
    const web = this.props.params.title==1 ? '一' : this.props.params.title==2 ? '2' : '3'
    return(
      <div>
        {web}
        {marked('# aaaa')}
        <div dangerouslySetInnerHTML={{__html:marked('# aaaa')}}></div>
      </div>
    )
  }
}

export default Item;
