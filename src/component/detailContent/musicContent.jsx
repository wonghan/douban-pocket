import React, { Component } from 'react'
import './index.css'

class MusicContent extends Component {
  render () {
    const datum = this.props.datum
    let tracks = datum.attrs.tracks || ['']
    tracks = tracks[0].split('\n')
    return (
      <div className='detail-content detail-music'>
        <div className='detail-music-info'>
          <img className='detail-music-img' src={datum.image} />
          <p className='detail-music-info-text'>名称：{datum.title}</p>
          <p className='detail-music-info-text'>
                    作者：
                    {
                    datum.author && datum.author.map((item, index) => {
                      return <span key={item.name}>{item.name}</span>
                    })
                    }
          </p>
          <p className='detail-music-info-text'>
                    发布商：
                    {
                    datum.attrs.publisher && datum.attrs.publisher.map((item, index) => {
                      return <span key={item}>{item}</span>
                    })
                    }
          </p>
          <p className='detail-music-info-text'>
                    发布时间：
                    {
                    datum.attrs.pubdate && datum.attrs.pubdate.map((item, index) => {
                      return <span key={item}>{item}</span>
                    })
                    }
          </p>
          <p className='detail-music-info-text'>评分：{datum.rating.average}</p>
          <p className='detail-music-info-text'>{
                    datum.tags && datum.tags.map((item) => {
                      return <span key={item.name} className='tag'>{item.name}</span>
                    })
                }</p>
        </div>

        <h2 className='detail-content-title'>简介</h2>
        <p className='detail-music-text'>{datum.summary}</p>
        <h2 className='detail-content-title'>内容</h2>
        <ul className='detail-music-tracks'>
          {
                    tracks && tracks.map((item) => {
                      return <li key={item}>{item}</li>
                    })
                    }
        </ul>
      </div>

    )
  }
}

export default MusicContent
