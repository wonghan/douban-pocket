import React, { Component } from 'react'
import './index.css'
import Item from '../indexListItem'
import JRoll from 'jroll'   // JRoll的用法见：https://github.com/chjtx/JRoll

class List extends Component {
  constructor (props) {
    super(props)
    this.jroll = null
    this.state = {
      type: this.props.type
    }
  }
  componentDidMount () {
    const self = this
    let wrappers = this.props.ID || 'wrappers'
    const upDiv = document.getElementById('upDiv')
    const downDiv = document.getElementById('downDiv')
    this.jroll = new JRoll(`#${wrappers}`)
    this.jroll.refresh()
    this.jroll.on('scroll', function () {
      if (this.y >= (this.minScrollY + 50)) {
        upDiv.innerHTML = "释放刷新"
      }
    })
    this.jroll.on('touchEnd', function () {
      if (this.y >= (this.minScrollY + 50)) {
        upDiv.innerHTML = ""
        self.props.refresh()
      }
    })
    this.jroll.on('scroll', function () {
      if (this.y <= (this.maxScrollY - 50)) {
        downDiv.innerHTML = "释放加载"
      }
    })
    this.jroll.on('touchEnd', function () {
      if (this.y <= (this.maxScrollY - 50)) {
        downDiv.innerHTML = ""
        self.props.load()
      }
    })
  }
  componentDidUpdate () {
    this.jroll.refresh()
        // 点击切换Tags时，自动回到list菜单第一列
    const oldType = this.state.type
    const newType = this.props.type
    if (oldType !== newType) {
      this.jroll.scrollTo(0, 0, 0)
      this.setState({
        type: newType
      })
    }
        // 点击搜索时，自动回到list菜单第一列
    if (this.props.onSearch === true) {
      this.jroll.scrollTo(0, 0, 0)
    }
  }
  render () {
    const type = this.props.type
    const data = this.props.data
    const clientHeight = document.documentElement.clientHeight; 
    return (
            // 设置滚动容器，其中id,height(滚动容器的高度)必须设置
      <div id='wrappers' style={{height: clientHeight*0.85}}>
        <ul className='list'>
          <div id='upDiv'></div>
          {data.map((item, index) => {
            return <Item item={item} key={index} type={type} pageChange={this.props.pageChange} />
          })}
          <div id='downDiv'></div>
        </ul>
      </div>
        )
  }
}

export default List
