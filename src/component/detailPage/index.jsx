import React, { Component } from 'react'
import './index.css'
import Header from '../detailHeader'
import Content from '../detailContent'

class Detail extends Component {
  render () {
    return (
      <div className='detail'>
        <Header datum={this.props.datum} type={this.props.type} pageChange={this.props.pageChange} />
        <Content datum={this.props.datum} type={this.props.type} />
      </div>

    )
  }
}

export default Detail
