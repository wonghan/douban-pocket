import React, { Component } from 'react'
import './index.css'

class Header extends Component {
  render () {
    const datum = this.props.datum
    const type = this.props.type
    const char = (type === 'book') && '图书' || (type === 'movie') && '电影' || (type === 'music') && '音乐'
    return (
      <div className='detail-header'>
        <div className='detail-header-back' onClick={() => { this.props.pageChange() }}><i className='iconfont icon-back' /><span>{char}</span></div>
        <p className='detail-header-title'>{datum.title}</p>
      </div>
    )
  }
}

export default Header
