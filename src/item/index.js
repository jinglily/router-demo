import React from 'react';

class Item extends React.Component {
  render () {
    console.log(this.props)
    const web = this.props.params.title==1 ? '一' : this.props.params.title==2 ? '2' : '3'
    return(
      <div>
        {web}
      </div>
    )
  }
}

export default Item;
