import React, { Component } from 'react'
import './index.css'
import BookItem from './bookItem'
import MovieItem from './movieItem'
import MusicItem from './musicItem'

class Item extends Component {
  constructor () {
    super()
    this.state = {
      windowWidth: window.innerWidth - 160
    }
  }
  render () {
    const datum = this.props.item
    const type = this.props.type
    switch (type) {
      case 'book':return <BookItem datum={datum} pageChange={this.props.pageChange}  windowWidth={this.state.windowWidth}/>
      case 'movie':return <MovieItem datum={datum} pageChange={this.props.pageChange}  windowWidth={this.state.windowWidth}/>
      case 'music':return <MusicItem datum={datum} pageChange={this.props.pageChange}  windowWidth={this.state.windowWidth}/>
    }
  }
}

export default Item
