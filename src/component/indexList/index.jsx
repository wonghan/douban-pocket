import React, { Component } from 'react'
import './index.css'
import Item from '../indexListItem'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: this.props.type,
      divHeight: window.innerHeight-145
    }
  }
  componentDidMount () {
    const self = this
    let ul = document.querySelector('.list');  // 获取ul列表
    let div = document.getElementById('wrappers') // 获取包裹ul列表的div(css:  overflow:scroll;)
    let upText = document.getElementById('upDiv');
    let downText = document.getElementById('downDiv');
    let start;  // 辅助变量：触摸开始时，相对于文档顶部的Y坐标
    let refresh = false;
    let isLoad = false;
    let divScrollTop = 0
    function scrollTo() { // 使得添加LI后依旧在原高度，不会自动回到顶部
      div.scrollTop = divScrollTop
    }
    function downTextFinal() {
      downText.innerHTML = '到底了'
    }
    
    /**
     * 上拉加载
     */
    div.addEventListener('scroll',function(){
      if(div.scrollTop>2000){ // 防止滑到底后跳到首部，被赋值为0
        divScrollTop = div.scrollTop
      }
      // console.log(divScrollTop)
      if(div.scrollHeight-div.scrollTop<1000 && isLoad===false){
        downText.innerHTML = '正在加载'
        isLoad = true;
        self.props.load(scrollTo,downTextFinal)
        // 节流阀
        setTimeout(function () {
          isLoad = false;
        }, 300);
      }
    },false);

    /**
     * 下拉刷新
     */
    div.addEventListener('touchstart',function(event){
      let touch = event.touches[0];
      start = touch.pageY;  // 辅助变量：触摸开始时，相对于文档顶部的Y坐标
    },false);
    div.addEventListener('touchmove',function(event){
      // 下拉刷新
      let touch = event.touches[0];
      if(div.scrollTop<=0){
        // 如果ul列表到顶部，修改ul列表的偏移,显示“下拉刷新”，并准备触发下拉刷新功能，可自定义
        ul.style.top = ul.offsetTop + (touch.pageY - start)/5 +'px'; // ul.style.top = ul.offsetTop + 'px'
        upText.innerHTML = "下拉刷新";
        start = touch.pageY;
        // 若ul偏移量过大,则修改文字,refresh置为true,配合'touchend'刷新
        if(ul.offsetTop>=60) {
          upText.innerHTML = "释放刷新";
          refresh = true;
        }
      }
    },false);
    
    div.addEventListener('touchend',function(event){
      // 若'touchend'时，ul偏移,用setInterval循环恢复ul的偏移量
      if(ul.offsetTop>=0) {
        let time = setInterval(function(){
          ul.style.top = ul.offsetTop -3 +'px';
          // 若ul的偏移量恢复，clearInterval
          if(ul.offsetTop<=0){
            clearInterval(time);
            upText.innerHTML = "";
            // 若恢复时'refresh===true',刷新页面
            if(refresh){
              refresh = false;
              self.props.refresh()
            }
          }
        },1)
      }
      if(ul.offsetTop<0) {
        ul.style.top = 0 +'px';
      }
    },false);
  }
  componentDidUpdate () {
    let div = document.getElementById('wrappers')
        // 点击切换Tags时，自动回到list菜单第一列
    const oldType = this.state.type
    const newType = this.props.type
    if (oldType !== newType) {
      div.scrollTop=0
      this.setState({
        type: newType
      })
    }
        // 点击搜索时，自动回到list菜单第一列
    if (this.props.onSearch === true) {
      div.scrollTop=0
    }
  }
  render () {
    const type = this.props.type
    const data = this.props.data
    return (
            // 设置滚动容器，其中id,height(滚动容器的高度)必须设置
      <div id='wrappers' style={{height: this.state.divHeight}}>
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
