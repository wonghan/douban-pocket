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
    this.jroll = new JRoll(`#${wrappers}`)
    this.jroll.refresh()
    this.jroll.on('scroll', function () {
      if (this.y >= (this.minScrollY + 50)) {
        console.log('释放刷新')
      }
    })
    this.jroll.on('touchEnd', function () {
      if (this.y >= (this.minScrollY + 50)) {
        console.log('刷新完成')
        self.props.refresh()
      }
    })
    this.jroll.on('scroll', function () {
      if (this.y <= (this.maxScrollY - 50)) {
        console.log('释放加载')
      }
    })
    this.jroll.on('touchEnd', function () {
      if (this.y <= (this.maxScrollY - 50)) {
        console.log('加载完成')
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
    return (
            // 设置滚动容器，其中id,height(滚动容器的高度)必须设置
      <div id='wrappers' style={{height: 570}}>
        <ul className='list'>
          {data.map((item, index) => {
            return <Item item={item} key={index} type={type} pageChange={this.props.pageChange} />
          })}
        </ul>
      </div>
        )
  }
}

export default List
