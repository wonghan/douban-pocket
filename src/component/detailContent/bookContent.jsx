import React, { Component } from 'react'
import './index.css'

class BookContent extends Component {
  render () {
    const datum = this.props.datum
    return (
      <div className='detail-content detail-book'>
        <div className='detail-book-info'>
          <img className='detail-book-img' src={datum.images.large} />
          <p className='detail-book-info-text'>名称：{datum.title}</p>
          <p className='detail-book-info-text'>作者：{datum.author}</p>
          <p className='detail-book-info-text'>出版社：{datum.publisher}</p>
          <p className='detail-book-info-text'>日期：{datum.pubdate}</p>
          <p className='detail-book-info-text'>评分：{datum.rating.average}</p>
          <p className='detail-book-info-text'>价钱：￥{datum.price}</p>
          <p className='detail-book-info-text'>{datum.tags && datum.tags.map((item, index) => {
            return <span key={item.name} className='tag'>{item.name} </span>
          })}</p>
        </div>
        <h2 className='detail-content-title'>序言</h2>
        <p className='detail-book-text'>{datum.catalog}</p>
        <h2 className='detail-content-title'>简介</h2>
        <p className='detail-book-text'>{datum.summary}</p>

      </div>

    )
  }
}

export default BookContent
