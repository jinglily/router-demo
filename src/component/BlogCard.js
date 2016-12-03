import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class BlogCard extends React.Component {
  render () {
    const style = {
                    margin: 12,
                    background:'#26A69A'
                  };
    return(
      <div className='blog-card'>
        <div className='blog-title'>
          <span>{this.props.index}</span>
        </div>
        <div className='blog-content clearfix'>
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
          <RaisedButton label="阅读更多" backgroundColor='#00838F' labelColor='#fff'   style={style} />
        </div>
      </div>
    )
  }
}

BlogCard.defaultProps={
  index:1,
  title:'我是默认标题',
  desc:'我是默认介绍'
}
BlogCard.proptype={
  index:React.PropTypes.number,
  title:React.PropTypes.string,
  title:React.PropTypes.string


}
export default BlogCard;
