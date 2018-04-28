import React, { Component } from 'react'
import './index.css'

class BookItem extends Component {
  render () {
    const datum = this.props.datum
    return (
      <li className='item' onClick={() => { this.props.pageChange(datum) }}>
        <img className='item-img' src={datum.image} />
        <div className='item-detail'>
          <p style={{width: this.props.windowWidth}}>名称：{datum.title}</p>
          <p style={{width: this.props.windowWidth}}>{datum.tags && datum.tags.map((item, index) => {
            return <span key={item.name} className='tag book-tag'>{item.name}</span>
          })}</p>
          <p style={{width: this.props.windowWidth}}>作者：{datum.author}</p>
          <p style={{width: this.props.windowWidth}}>评分：{datum.rating.average}</p>
          <p style={{width: this.props.windowWidth}}>日期：{datum.pubdate}</p>
        </div>
      </li>
    )
  }
}

export default BookItem
