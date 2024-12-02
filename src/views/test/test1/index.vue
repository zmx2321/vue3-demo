<template>
  <section class="nav_page_wrap">
    <div class="top_wrap">
      <div class="cont_wrap top_cont">
        <div class="logo_wrap">
          <span>单点登陆页面</span>
        </div>
        <!-- <div class="tip_wrap">tip</div> -->
      </div>
    </div>
    <div class="content_wrap">
      <div class="cont_wrap">
        <div class="cont_side">
          <ul>
            <li v-for="(item, index) in listData" :key="item.index" @click="jump(index, $event)">
              <span>{{ item.systemName }}</span>
            </li>
          </ul>
        </div>
        <div class="cont_main" @scroll="onScroll">
          <div class="cont_item scroll-item" v-for="(item, index) in listData" :key="item.index">
            <h3>{{ item.systemName }}</h3>
            <div class="cont_item_wrap">
              <div class="ctip_item_box" v-for="(jItem, index) in item.itemSystemList" :key="jItem.index">
                <div class="logo">
                  <img :src="jItem.itemSystemImgUrl" :alt="jItem.itemSystemImgUrl">
                </div>
                <div class="tip">
                  <dl>
                    <dt>
                      <ul>
                        <li>{{ jItem.itemSystemName }}</li>
                        <li>
                          <el-button type="primary" size="small" @click="setIn(jItem)">进入</el-button>
                        </li>
                      </ul>
                    </dt>
                    <dd>{{ jItem.itemSystemSubTitle }}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import list from './data/list'

const listData = ref(null)
let activeStep = 0

const jump = (index, e) => {
  // console.log(index, e)

  // dom
  let items = document.querySelectorAll(".scroll-item");  // 滚动
  let titleDom = document.querySelectorAll(".cont_side ul li")  // // 侧边栏

  // 侧边栏初始化
  titleDom.forEach((item, i) => {
    item.classList.remove('selected')
  })

  // 如果不是点击,即没有事件对象,跳转到第一个
  if (!e) {
    titleDom[0].classList.add('selected')
    items[0].scrollIntoView({
      block: "start", // 默认跳转到顶部
      behavior: "smooth" // 滚动的速度
    });
    return
  }

  // 点击高亮跳转
  e.target.classList.add('selected')
  for (var i = 0; i < items.length; i++) {
    if (index === i) {
      items[i].scrollIntoView({
        block: "start", // 默认跳转到顶部
        behavior: "smooth" // 滚动的速度
      });
    }
  }
}

const onScroll = (e) => {
  let scrollItems = document.querySelectorAll(".scroll-item");
  for (let i = scrollItems.length - 1; i >= 0; i--) {
    // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
    let judge =
      e.target.scrollTop >= scrollItems[i].offsetTop - scrollItems[0].offsetTop;
    if (judge) {
      activeStep = i;
      break;
    }
  }
}

const setIn = (val) => {
  // console.log("点击进入页面", val)

  const { itemSystemLinkUrl } = val

  window.open(itemSystemLinkUrl, '_blank')
}

const getPageList = () => {
  // 接口请求
  // ......
  console.log("请求接口获取列表数据", list)

  // 处理数据并赋值
  listData.value = list.data
}


// 调用接口获取数据
getPageList()

nextTick(() => {
  setTimeout(() => {
    jump()
  }, 300);
})
</script>

<style lang="scss" scoped>
.nav_page_wrap {
  width: 100%;
  height: 100%;
  background: #edeff3;
  overflow: hidden;

  .top_wrap {
    width: 100%;
    height: 65px;
    // background: linear-gradient(to right, #4c6ee6, #557cf0, #6091f9, #6da7ff, #81b5ff, #8cc7ff, #9fd2ff, #b3e2ff, #c8f2ff, #d9f9ff, #e5fbff, #f0fcff);
    background: linear-gradient(to right, #7994f3, #bfcbf1);
    box-shadow: 0px 0px 3px 3px #a4a4a4;
    margin-bottom: 30px;

    .top_cont {
      display: flex;
      justify-content: space-between;

      &.cont_wrap {
        width: 80%;
        margin: 0 auto;
        min-height: 20px;
      }

      .logo_wrap {
        span {
          display: block;
          line-height: 65px;
          color: #fff;
        }
      }
    }
  }

  .content_wrap {
    .cont_wrap {
      display: flex;
      justify-content: space-between;
      width: 92%;
      margin: 0 auto;
      border-radius: 10px;
      padding: 18px 0;

      .cont_side,
      .cont_main {
        padding-top: 15px;
        height: calc(100vh - 65px - 30px - 65px);
        background: #fff;
        border-radius: 10px;
        overflow: auto;
      }

      .cont_side {
        width: 220px;
        margin-right: 30px;

        ul {
          padding-left: 13px;
          width: 88%;

          li {
            padding: 8px 0 8px 10px;
            cursor: pointer;
            transition: .2s linear;
            border-radius: 10px;

            &:not(:last-child) {
              margin-bottom: 10px;
            }

            &:hover,
            &.selected {
              background: #4c6ee6;
              color: #fff;
              transition: .3s linear;
            }

            span {
              font-size: 16px;
            }
          }
        }
      }

      .cont_main {
        flex: 1;
        // padding-top: 20px;

        .cont_item {
          width: 96%;
          margin-left: 3.5%;

          &:not(:last-child) {
            margin-bottom: 10px;
          }

          h3 {
            position: relative;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;

            &::before {
              content: "";
              position: absolute;
              width: 5px;
              height: 15px;
              background: #4c6ee6;
              left: -15px;
              top: 50%;
              transform: translateY(-50%);
            }
          }

          .cont_item_wrap {
            padding-left: 20px;

            .ctip_item_box {
              display: inline-block;
              // margin-right: calc((98% - (250px * 5))/5);
              margin-right: 30px;
              margin-bottom: 42px;
              width: 250px;
              height: 185px;
              border: solid 1px #e6e6e6;
              border-radius: 10px;
              overflow: hidden;
              transition: .2s linear;

              &:hover {
                box-shadow: 0px 1px 3px 1px #d6d6d6;
                transition: .3s linear;
              }

              .logo {
                width: 100%;
                height: 120px;
                margin-bottom: 11px;

                img {
                  width: 100%;
                  height: 100%;
                  overflow: hidden;
                }
              }

              .tip {
                width: 100%;

                dl {
                  width: 92%;
                  margin: 0 auto;

                  dt {
                    ul {
                      display: flex;
                      justify-content: space-between;

                      li {
                        &:first-child {
                          font-weight: bold;
                        }
                      }
                    }
                  }

                  li,
                  dd {
                    font-size: 13px;
                  }
                }
              }
            }
          }
        }
      }


    }
  }
}
</style>
