import React, { Component } from 'react'
import './index.css'

class MovieContent extends Component {
  render () {
    const datum = this.props.datum
    return (
      <div className='detail-content detail-movie'>
        <img className='detail-movie-img' src={datum.images.large} />
        <div className='detail-movie-info'>
          <h2 className='detail-content-title'>简介</h2>
          <p className='detail-movie-info-text'>
                        名称：{datum.title}
            {
                        datum.genres && datum.genres.map((item, index) => {
                          return <span key={item} className='tag'>{item}</span>
                        })
                        }
          </p>
          <p className='detail-movie-info-text'>上映时间：{datum.year}</p>
          <p className='detail-movie-info-text'>导演：{datum.directors[0] && datum.directors[0].name}</p>
          <p className='detail-movie-info-text'>{datum.title}({datum.original_title || ''})</p>
        </div>
        <h2 className='detail-content-title'>演员</h2>
        <div className='detail-movie-casts'>
          {
                    datum.casts && datum.casts.map((item, index) => {
                      return (
                        <div key={index} className='cast'>
                          <img className='cast-avatar' src={item.avatars && (item.avatars.large || item.avatars.medium || item.avatars.small)} />
                          <span className='cast-name'>{item.name}</span>
                        </div>
                      )
                    })
                }
        </div>
      </div>

    )
  }
}

export default MovieContent
