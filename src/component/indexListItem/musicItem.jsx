import React, { Component } from 'react'
import './index.css'

class MusicItem extends Component {
  render () {
    const datum = this.props.datum
    return (
      <li className='item' onClick={() => { this.props.pageChange(datum) }}>
        <img className='item-img' src={datum.image} />
        <div className='item-detail'>
          <p>名称：{datum.title}</p>
          <p>{datum.tags && datum.tags.map((item) => {
            return <span key={item.name} className='tag music-tag'>{item.name}</span>
          })}</p>
          <p>作者：{datum.author && datum.author.map((item, index) => {
            return <span key={item.name} className='author'>{item.name}</span>
          })}</p>
          <p>评分：{datum.rating.average}</p>
        </div>
      </li>
    )
  }
}

export default MusicItem
