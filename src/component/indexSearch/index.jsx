import React, { Component } from 'react'
import './index.css'

class Search extends Component {
  render () {
    const type = this.props.type
    const index = (type === 'movie' && 1) || (type === 'music' && 2) || 0
    const placeholderMaps = [
      '书名、作者、ISBN',
      '电影、影人、影院、电视剧',
      '唱片名、表演者、条码、ISRC'
    ]
    return (
      <div className='search'>
        <i className='iconfont icon-search' />
        <input className='search-input' placeholder={placeholderMaps[index]}
          ref={input => this.input = input} />
        <button className='search-btn' onClick={() => { this.props.onClickSearch(this.input.value, 0) }}>搜索</button>
      </div>
    )
  }
}

export default Search
