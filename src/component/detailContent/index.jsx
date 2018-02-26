import React, { Component } from 'react'
import './index.css'
import BookContent from './bookContent'
import MovieContent from './movieContent'
import MusicContent from './musicContent'

class Content extends Component {
  render () {
    const datum = this.props.datum
    const type = this.props.type
    switch (type) {
      case 'book':return <BookContent datum={datum} pageChange={this.props.pageChange} />
      case 'movie':return <MovieContent datum={datum} pageChange={this.props.pageChange} />
      case 'music':return <MusicContent datum={datum} pageChange={this.props.pageChange} />
    }
  }
}

export default Content
