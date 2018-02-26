import React, { Component } from 'react'
import './index.css'
import BookItem from './bookItem'
import MovieItem from './movieItem'
import MusicItem from './musicItem'

class Item extends Component {
  render () {
    const datum = this.props.item
    const type = this.props.type
    switch (type) {
      case 'book':return <BookItem datum={datum} pageChange={this.props.pageChange} />
      case 'movie':return <MovieItem datum={datum} pageChange={this.props.pageChange} />
      case 'music':return <MusicItem datum={datum} pageChange={this.props.pageChange} />
    }
  }
}

export default Item
