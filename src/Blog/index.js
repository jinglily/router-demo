import React from 'react';

import BlogCard from './../component/BlogCard';

let data = [
  {index:1,title:'标题1',desc:'介绍1'},
  {index:2,title:'标题2',desc:'介绍2'},
  {index:3,title:'标题3',desc:'介绍3'},
  {index:4,title:'标题4',desc:'介绍4'},
  {index:5,title:'标题5',desc:'介绍5'},
  {index:6,title:'标题6',desc:'介绍6'},

]

class Blog extends React.Component {

  render () {
    let cards = data.map((item,i) => <BlogCard {...item} key={i} />)
    return(
      <div className='blog-wrap'>

        {cards}

      </div>
    )
  }
}

export default Blog;
