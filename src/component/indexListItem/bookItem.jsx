import React, { Component } from 'react'
import './index.css'

class BookItem extends Component {
  render () {
    const datum = this.props.datum
    return (
      <li className='item' onClick={() => { this.props.pageChange(datum) }}>
        <img className='item-img' src={datum.image} />
        <div className='item-detail'>
          <p>名称：{datum.title}</p>
          <p>{datum.tags && datum.tags.map((item, index) => {
            return <span key={item.name} className='tag book-tag'>{item.name}</span>
          })}</p>
          <p>作者：{datum.author}</p>
          <p>评分：{datum.rating.average}</p>
          <p>日期：{datum.pubdate}</p>
        </div>
      </li>
    )
  }
}

export default BookItem
