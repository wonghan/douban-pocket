import React, { Component } from 'react'

import books from './mocks/books'
import movies from './mocks/movies'
import musics from './mocks/musics'
import {fetchBooks, fetchMovies, fetchMusics} from './api/fetch'

import Search from './component/indexSearch'
import List from './component/indexlist'
import Nav from './component/indexNav'
import Detail from './component/detailPage'

import './style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      type: 'book',
      pageType: false,
      onSearch: false,
      keyword: '',
      pageCountBook: 0,
      pageCountMovie: 0,
      pageCountMusic: 0,
      datum: '',
      books: books.books,
      movies: movies.subjects,
      musics: musics.musics
    }
  }
  fetchBooks (keyword, page) {
    fetchBooks(keyword, page).then(data => {
      this.setState({
        keyword: keyword,
        pageCount: page,
        books: data.books
      })
    })
  }
  fetchMovies (keyword, page) {
    fetchMovies(keyword, page).then(data => {
      this.setState({
        keyword: keyword,
        pageCount: page,
        movies: data.subjects
      })
    })
  }
  fetchMusics (keyword, page) {
    fetchMusics(keyword, page).then(data => {
      this.setState({
        keyword: keyword,
        pageCount: page,
        musics: data.musics
      })
    })
  }
  onClickNav (type) {
    this.setState({
      type: type
    })
  }
  onClickSearch (keyword, page) {
        // 点击搜索时，将搜索状态置为true=>list列表回到第一列
    this.setState({
      onSearch: true
    })
    switch (this.state.type) {
      case 'book':this.fetchBooks(keyword, page); break
      case 'movie':this.fetchMovies(keyword, page); break
      case 'music':this.fetchMusics(keyword, page); break
    }
  }
  pageChange (datum) {
    this.setState({
      pageType: !this.state.pageType,
      datum: datum,
      onSearch: false // 点击list-item时，将搜索状态置为false=>返回时依旧在原位置
    })
  }
  refresh () {
    switch (this.state.type) {
      case 'book': this.setState({books: books.books}); break
      case 'movie': this.setState({movies: movies.subjects}); break
      case 'music': this.setState({musics: musics.musics}); break
    }
  }
  load (callback,error) {
    if(this.state.keyword===''){
      error()
      return
    }
    switch (this.state.type) {
      case 'book':
        const books = this.state.books
        fetchBooks(this.state.keyword, this.state.pageCountBook + 1).then(data => {
          data.books && data.books.forEach((item, index) => {
            books.push(item)
          })
          this.setState({
            books: books,
            pageCountBook: this.state.pageCountBook + 1
          })
          callback()
        }).catch(ex=>{
          error()
        })
        break
      case 'movie':
        const movies = this.state.movies
        fetchMovies(this.state.keyword, this.state.pageCountMovie + 1).then(data => {
          data.subjects && data.subjects.forEach((item, index) => {
            movies.push(item)
          })
          this.setState({
            movies: movies,
            pageCountMovie: this.state.pageCountMovie + 1
          })
          callback()
        }).catch(ex=>{
          error()
        })
        break
      case 'music':
        const musics = this.state.musics
        fetchMusics(this.state.keyword, this.state.pageCountMusic + 1).then(data => {
          data.musics && data.musics.forEach((item, index) => {
            musics.push(item)
          })
          this.setState({
            musics: musics,
            pageCountMusic: this.state.pageCountMusic + 1
          })
          callback()
        }).catch(ex=>{
          error()
        })
        break
    }
  }
  render () {
    const type = this.state.type
    const data = (type === 'book' && this.state.books) || (type === 'movie' && this.state.movies) || (type === 'music' && this.state.musics)
    return (
      <div className='app'>
        <div className={'index' + ' ' + !this.state.pageType}>
          <Search type={type} onClickSearch={this.onClickSearch.bind(this)} />
          <List type={type} data={data} onSearch={this.state.onSearch} pageChange={this.pageChange.bind(this)} refresh={this.refresh.bind(this)} load={this.load.bind(this)}/>
          <Nav onClickNav={this.onClickNav.bind(this)} type={this.state.type} />
        </div>
        {this.state.pageType && <Detail datum={this.state.datum} type={this.state.type} pageChange={this.pageChange.bind(this)} />}
      </div>
    )
  }
}

module.exports = App
