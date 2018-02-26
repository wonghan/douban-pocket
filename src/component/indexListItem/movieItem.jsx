import React, { Component } from 'react'
import './index.css'

class MovieItem extends Component {
  render () {
    const datum = this.props.datum
    return (
      <li className='item' onClick={() => { this.props.pageChange(datum) }}>
        <img className='item-img' src={datum.images.small} />
        <div className='item-detail'>
          <p>名称：{datum.title}</p>
          <p>{datum.genres && datum.genres.map((item, index) => {
            return <span key={item} className='tag movie-tag'>{item}</span>
          })}</p>
          <p>作者：{datum.casts && datum.casts.map((item, index) => {
            return <span key={item.name} className='casts'>{item.name} </span>
          })}</p>
          <p>评分：{datum.rating.average}</p>
        </div>
      </li>
    )
  }
}

export default MovieItem
