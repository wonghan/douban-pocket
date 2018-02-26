import React, { Component } from 'react'
import './index.css'

class Nav extends Component {
  render () {
    const type = this.props.type
    return (
      <div className='nav'>
        <div className={'nav-item ' + (type === 'book' ? 'nav-item-selected' : '')} onClick={() => { this.props.onClickNav('book') }}><i className='iconfont icon-book' /><span className='nav-item-text'>图书</span></div>
        <div className={'nav-item ' + (type === 'movie' ? 'nav-item-selected' : '')} onClick={() => { this.props.onClickNav('movie') }}><i className='iconfont icon-movie' /><span className='nav-item-text'>电影</span></div>
        <div className={'nav-item ' + (type === 'music' ? 'nav-item-selected' : '')} onClick={() => { this.props.onClickNav('music') }}><i className='iconfont icon-music' /><span className='nav-item-text'>音乐</span></div>
      </div>
    )
  }
}

export default Nav
