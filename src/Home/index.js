import React from 'react';

class Home extends React.Component {
  render () {
    return(
      <div className='home-wrap'>
        <div className='home-cover'>
          <div className='home-item'>
            <h3 style={{color:'#E0E0E0',fontSize:'24px'}}>It’s jinglily</h3>
            <p style={{color:'#E0E0E0',fontSize:'20px'}}>Welcome</p>
            <button>
              <a href="www.baidu.com">HELP ME</a></button>
          </div>
        </div>

      </div>
    )
  }
}

export default Home;
