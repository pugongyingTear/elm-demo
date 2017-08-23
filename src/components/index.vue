<template>
  <div class="index" style="width:100%; padding: 0; margin: 0;">
    <!-- <mt-header fixed title="黄浦区广州开发区科技企业加速器"> -->
      <!-- <h4 slot="left" @click="reload">饿了么</h4>
      <mt-button slot="right"><router-link to="/login">登录|</router-link></mt-button>
       <mt-button slot="right"><router-link to="/registration">注册</router-link></mt-button> -->
      <!--  <img src="./../images/search.png" slot="left">
       <img src="./../images/user152.png" slot="right" width="18.61px" height="19.39px;">
    </mt-header> -->
    <div class="content">
      <mt-tabbar v-model="selected" fixed="bottom" style="width:100%;height:.6rem;background-color:#EAEAEA;">
        <mt-tab-item class="guide_item active" id="take-out">
          <img src="./../images/elmlogo.png" style="width:.22rem;height:.22rem;">
          <span class="mtfoot">外卖</span>
        </mt-tab-item>
        <mt-tab-item class="guide_item" id="search">
          <img src="./../images/search.png" style="width:.22rem;height:.22rem;">
          <span class="mtfoot">搜索</span></router-link>
        </mt-tab-item>
        <mt-tab-item class="guide_item" id="order">
          <img src="./../images/order.png" style="width:.22rem;height:.22rem;">
          <span class="mtfoot">订单</span>
        </mt-tab-item>
        <mt-tab-item class="guide_item" id="mine">
          <img src="./../images/user152.png"style="width:.22rem;height:.22rem;">
          <!-- <i class="fa fa-user-o" aria-hidden="true"></i> -->
          <span class="mtfoot">我的</span>
        </mt-tab-item>
      </mt-tabbar>
      <mt-tab-container v-model="selected" style="width:100%; padding: 0; margin: 0;">
        <mt-tab-container-item id="take-out">
          <mt-header fixed class="header">
            <img src="./../images/search.png" slot="left" style="width:.2481rem;height:.2585rem;">
            <span slot="left" style="left:.73rem;top:.1rem;position: absolute;font-size:.15rem;">黄浦区广州开发区科技企业加速器</span>
            <img src="./../images/user152.png" slot="right" style="width:.2481rem;height:.2585rem;">
          </mt-header>
          <mt-swipe :auto="4000" style="width:100%;height:2.5rem; padding: 0;">
            <mt-swipe-item>
              <ul style="width:100%; margin-top: 0.25rem; padding-top: 0.25rem;margin-bottom:-.27rem;">
                <li><img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg"><span>甜品饮料</span></li>
                <li><img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg"><span>美食</span></li>
                <li><img src="https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg"><span>准时到</span></li>
                <li><img src="https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg"><span>新店特惠</span></li>
              </ul>
              <ul>
                <li><img src="https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg"><span>鲜花蛋糕</span></li>
                <li><img src="https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg"><span>包子粥店</span></li>
                <li><img src="https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg"><span>商超便利</span></li>
                <li><img src="https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg"><span>预定早餐</span></li>
              </ul>
            </mt-swipe-item>
            <mt-swipe-item>
              <ul style="width:100%; margin-top: 0.25rem; padding-top: 0.25rem;margin-bottom:-.27rem;">
                <li><img src="https://fuss10.elemecdn.com/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg"><span>果蔬生鲜</span></li>
                <li><img src="https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg"><span>汉堡薯条</span></li>
                <li><img src="https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg"><span>披萨意面</span></li>
                <li><img src="https://fuss10.elemecdn.com/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg"><span>日韩料理</span></li>
              </ul>
              <ul>
                <li><img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg"><span>简餐</span></li>
                <li><img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg"><span>土豪推荐</span></li>
                <li><img src="https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg"><span>麻辣烫</span></li>
                <li><img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg"><span>川湘菜</span></li>
              </ul>
            </mt-swipe-item>
          </mt-swipe> 
          <span class="shop">附近商店</span>
          <ul class="shop_ul">
            <li class="shop_li">
              <img src="./../images/activity.png" class="shop_img">
              <div class="shop_describe">
                <div class="shop_describetop">
                  <span class="shop_brand">品牌</span>
                  <span class="shop_show">测试修改</span>
                  <span class="shop_supports">保准票</span>
                </div>
                <div class="shop_describemiddle">
                  <li class="shop_star">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/ban.png">
                    <span class="shop_score">3.9</span>
                    <span class="shop_sale">月售221单</span>
                    <span class="hummingbirdCourier">蜂鸟专送</span>
                    <span class="ontime">准时到</span>
                  </li>
                </div>
                <div class="shop_describebottom">
                  <span class="cost">￥20起送/配送费约￥5</span>
                  <span class="distance">978.4公里/</span>
                  <span class="time">13小时32分钟</span>
                </div>
              </div>
            </li>
            <li class="shop_li">
              <img src="./../images/activity.png" class="shop_img">
              <div class="shop_describe">
                <div class="shop_describetop">
                  <span class="shop_brand">品牌</span>
                  <span class="shop_show">PLYP</span>
                  <span class="shop_supports">保准票</span>
                </div>
                <div class="shop_describemiddle">
                  <li class="shop_star">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/ban.png">
                    <span class="shop_score">3.7</span>
                    <span class="shop_sale">月售448单</span>
                    <span class="hummingbirdCourier">蜂鸟专送</span>
                    <span class="ontime">准时到</span>
                  </li>
                </div>
                <div class="shop_describebottom">
                  <span class="cost">￥20起送/配送费约￥5</span>
                  <span class="distance">88.6公里/</span>
                  <span class="time">1小时57分钟</span>
                </div>
              </div>
            </li>
            <li class="shop_li">
              <img src="./../images/activity.png" class="shop_img">
              <div class="shop_describe">
                <div class="shop_describetop">
                  <span class="shop_brand">品牌</span>
                  <span class="shop_show">my shop</span>
                  <span class="shop_supports">保准票</span>
                </div>
                <div class="shop_describemiddle">
                  <li class="shop_star">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/ban.png">
                    <span class="shop_score">4.5</span>
                    <span class="shop_sale">月售357单</span>
                    <span class="hummingbirdCourier">蜂鸟专送</span>
                    <span class="ontime">准时到</span>
                  </li>
                </div>
                <div class="shop_describebottom">
                  <span class="cost">￥20起送/配送费约￥5</span>
                  <span class="distance">1211.1公里/</span>
                  <span class="time">16小时1分钟</span>
                </div>
              </div>
            </li>
            <li class="shop_li">
              <img src="./../images/activity.png" class="shop_img">
              <div class="shop_describe">
                <div class="shop_describetop">
                  <span class="shop_brand">品牌</span>
                  <span class="shop_show">小宝测</span>
                  <span class="shop_supports">保准票</span>
                </div>
                <div class="shop_describemiddle">
                  <li class="shop_star">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/ban.png">
                    <span class="shop_score">4.2</span>
                    <span class="shop_sale">月售947单</span>
                    <span class="hummingbirdCourier">蜂鸟专送</span>
                    <span class="ontime">准时到</span>
                  </li>
                </div>
                <div class="shop_describebottom">
                  <span class="cost">￥20起送/配送费约￥5</span>
                  <span class="distance">2103.3公里/</span>
                  <span class="time">31小时48分钟</span>
                </div>
              </div>
            </li>
            <li class="shop_li">
              <img src="./../images/activity.png" class="shop_img">
              <div class="shop_describe">
                <div class="shop_describetop">
                  <span class="shop_brand">品牌</span>
                  <span class="shop_show">134535</span>
                  <span class="shop_supports">保准票</span>
                </div>
                <div class="shop_describemiddle">
                  <li class="shop_star">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/ban.png">
                    <span class="shop_score">4.6</span>
                    <span class="shop_sale">月售81单</span>
                    <span class="hummingbirdCourier">蜂鸟专送</span>
                    <span class="ontime">准时到</span>
                  </li>
                </div>
                <div class="shop_describebottom">
                  <span class="cost">￥20起送/配送费约￥5</span>
                  <span class="distance">1209.8公里/</span>
                  <span class="time">20小时10分钟</span>
                </div>
              </div>
            </li>
            <li class="shop_li">
              <img src="./../images/activity.png" class="shop_img">
              <div class="shop_describe">
                <div class="shop_describetop">
                  <span class="shop_brand">品牌</span>
                  <span class="shop_show">rql</span>
                  <span class="shop_supports">保准票</span>
                </div>
                <div class="shop_describemiddle">
                  <li class="shop_star">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/ban.png">
                    <span class="shop_score">4.9</span>
                    <span class="shop_sale">月售57单</span>
                    <span class="hummingbirdCourier">蜂鸟专送</span>
                    <span class="ontime">准时到</span>
                  </li>
                </div>
                <div class="shop_describebottom">
                  <span class="cost">￥20起送/配送费约￥5</span>
                  <span class="distance">1364.5公里/</span>
                  <span class="time">21小时48分钟</span>
                </div>
              </div>
            </li>
            <li class="shop_li">
              <img src="./../images/activity.png" class="shop_img">
              <div class="shop_describe">
                <div class="shop_describetop">
                  <span class="shop_brand">品牌</span>
                  <span class="shop_show">PLYP</span>
                  <span class="shop_supports">保准票</span>
                </div>
                <div class="shop_describemiddle">
                  <li class="shop_star">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/quan.png">
                    <img src="./../images/ban.png">
                    <span class="shop_score">4.6</span>
                    <span class="shop_sale">月售532单</span>
                    <span class="hummingbirdCourier">蜂鸟专送</span>
                    <span class="ontime">准时到</span>
                  </li>
                </div>
                <div class="shop_describebottom">
                  <span class="cost">￥20起送/配送费约￥5</span>
                  <span class="distance">1387.6公里/</span>
                  <span class="time">21小时54分钟</span>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
      <mt-tab-container v-model="selected" style="display:block;">
        <mt-tab-container-item id="search">
        <div style="position:relative">
          <mt-header fixed class="header">
            <router-link to="/" slot="left">
              <span style="font-size:.25rem;margin-left:.1rem"> < 
              </span>
              <span style="left:1.8rem;top:.1rem;position: absolute;font-size:.15rem;">搜索</span>
            </router-link> 
          </mt-header>
          <div style="height:2rem;width:100%;">
            <mt-field placeholder="请输入商家或美食名称" v-model="shopOrFood" class="searchInput">
            </mt-field>
            <mt-button type="primary" style="right:.3rem;top:.5rem;position:absolute;height:.55rem">
            <span style="font-size:.2rem">提交</span>
            </mt-button>
          </div>
        </div>
        </mt-tab-container-item>
      </mt-tab-container>
     <mt-tab-container v-model="selected" style="display:block;">
        <mt-tab-container-item id="order">
          <mt-header fixed class="header">
            <router-link to="/" slot="left">
              <span style="font-size:.25rem;margin-left:.1rem"> < 
              </span>
              <span style="left:1.8rem;top:.1rem;position: absolute;font-size:.15rem;">订单列表</span>
            </router-link> 
          </mt-header>
        </mt-tab-container-item>
      </mt-tab-container>
      <mt-tab-container v-model="selected" style="display:block;">
        <mt-tab-container-item id="mine">
          <mt-header fixed class="header">
            <router-link to="/" slot="left">
              <span style="font-size:.25rem;margin-left:.1rem"> < 
              </span>
              <span style="left:1.8rem;top:.1rem;position: absolute;font-size:.15rem;">我的</span>
            </router-link> 
          </mt-header>
          <div ref="widthmine" class="mineDiv">
            <img src="./../images/tx.png" class="qqImg">
            <span class="mail">1774897352@qq.com</span>
            <img src="./../images/bindphone2.png" class="bindphoneImg">
            <span class="phone">暂无绑定手机号</span>
            <span class="right">></span>
          </div>
          <div style="width:100%;height:1rem;padding-top:.2rem">
            <div style="width:33%;height:1.5rem;float:left;position: relative;">
              <span class="fuli">0.00</span>
              <span class="danwei">元</span>
              <span class="case">我的余额</span>
            </div>
            <div style="width:33%;height:1.5rem;float:left;position: relative;">
              <span style="color:red;font-size:.3rem;top:.02rem;left:.55rem;position:absolute;">3</span>
              <span class="danwei">个</span>
              <span class="case">我的优惠</span>
            </div>
            <div style="width:34%;height:6rem;float:left;position: relative;">
              <span style="color:green;font-size:.3rem;top:.02rem;left:.55rem;position:absolute;">0</span>
              <span class="danwei">分</span>
              <span class="case">我的积分</span>
            </div>
          </div>
          <div style="width:100%;height:4rem;position: relative;">
            <div style="width:100%;height:.5rem;position: absolute;">
              <img src="./../images/elmlogo.png" class="mineImg">
              <span class="name">我的订单</span>
              <span class="next">></span>
            </div>
            <div style="width:100%;height:.5rem;position: absolute;top:.5rem">
              <img src="./../images/积分商城.png" class="mineImg">
              <span class="name">积分商城</span>
              <span class="next">></span>
            </div>
            <div style="width:100%;height:3rem;position: absolute;top:1rem">
              <img src="./../images/王冠.png" class="mineImg">
              <span class="name">饿了么会员卡</span>
              <span class="next">></span>
            </div>
            <div style="width:100%;height:3rem;position: absolute;top:1.5rem">
              <img src="./../images/elmlogo.png" class="mineImg">
              <span class="name">服务中心</span>
              <span class="next">></span>
            </div>
            <div style="width:100%;height:3rem;position: absolute;top:2rem">
              <img src="./../images/elmlogo.png" class="mineImg">
              <span class="name">下载饿了么APP</span>
              <span class="next">></span>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Search } from 'mint-ui';
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';

import Vue from 'vue';
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(Search.name, Search)
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.use(InfiniteScroll);
export default {
  name: 'index',
  data () {
    return {
      selected: 'take-out'
    }
  },
  methods: {
    reload: function () {
      window.location.reload(); 
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  }
  // created () {
  //   let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  //   this.$refs.widthmine.style.width = w + 'rem';
  //   let h = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  //   this.$refs.widthmine.style.height = h + 'rem';
    // var divI = getElementById("mineDiv");
    // divI.winth = $window.winth;
  // $(function(){
  //    $("div").width($(window).width());
  // $("div").resize(function(){
  //   $("div").width($(window).width());
  // })
  // })

  // $( function () {
  //   $("div").width(($window).width());
  // $("div").resize(function(){
  //   $("div").width(($window).width());
  // })
  // })

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  position: absolute;
}

ul {
  list-style: none;
  padding: 0;
}
a {
  color: #fff;
  text-decoration: none;
}
a:hover{
  color: #fff;
}
.header{
  height:.35rem
}
ul li img{
  width: .5625rem;
  height: .5625rem;
  position: absolute;
  top: .0001rem;
  left: .02rem;
}
ul li span{
  width: .6625rem;
  position: absolute;
  font-size: .15rem;
  top: .6rem;
  left: .035rem;
}
li{
  display: inline-block;
 /* margin: .00226rem;*/
  position: relative;
  width: .6875rem;
  height: .96rem;
  list-style: 0;
  font-style: normal;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.65rem;
  font-family: Microsoft Yahei;
}
.guide_item{
  width: 1.25rem;
  height: .6093rem;
  margin: 0 .00226rem;
  position: relative;
}
.mtfoot{
  height: .2267;
  position: absolute;
  top: .4267rem;
  left: .3247rem;
  color: #26a2ff;
  font-size: .13rem;
}
.shop{
  color: #999;
  float: left;
  font-size:.23rem;
  margin-bottom:.3rem;
}
.mint-cell-title {
  display: block;
}
.mint-tab-container-item{
  display: block;
}
.shop_header_title{
  color: #999;
  font: .55rem/1.6rem Microsoft YaHei;
}
.content{
  position: relative;
  display: block;
}
.shop_ul{
  height: auto;
  width: 100%;
  position: relative;
}
.shop_li{
  /*display: flex;*/
  border-bottom: .025rem solid #f1f1f1;
  padding: 0 .4rem;
  width: 97%;
  position: relative;
}
.shop_img{
  width: .6rem;
  height: .65rem;
  display: block;
  /*margin-right: -.4rem;*/
 /*padding-right: 4.6rem;*/
  position: absolute;
}
.shop_describe{
  margin-left: .16rem;
  position: absolute;
  top:0;
  height:1.4rem;
}
.shop_describetop{
  /*background-color: #fff;*/
  height: 1.3rem;
  background-color:red;
}
.shop_brand{
  background-color: orange;
  width: .45rem;
  top: .07rem;
  left: .1rem;
  font-weight: 700;
  font-size:.15rem;
}
.shop_show{
  /*background-color: red;*/
  position: absolute;
  top: .003rem;
  left: .6rem;
  text-align: left;
  font-size: .2rem;
  font-weight: 700;
  padding:0;
  width:2rem;

}
.shop_supports{
  /*background-color: red;*/
  color: #999;
  font-size: .2rem;
  border: .0025rem solid #f1f1f1;
  border-radius: .03rem;
  position:absolute;
  top:.04rem;
  left:2.5rem;
  font-size:.15rem;
}
.shop_describemiddle{
  position:absolute;
  width:1.7rem;
  height:.25rem;
  top:.3rem;
}
.shop_star{
  width: .8rem;
  height: .25rem;
  top:0rem;
  left:.05rem;
  position:absolute;
}
.shop_ul .shop_li .shop_describe .shop_star img{
  /*position: absolute;*/
  width: .16rem;
  height: .16rem;
  float: left;
  position:relative;
}
.shop_score{
  color: orange;
  top: 0rem;
  left: .58rem;
}
.shop_sale{
  position: absolute;
  color: #555;
  top:0rem;
  left:1.08rem;
  width:.75rem;
}
.hummingbirdCourier{
  background-color: #26a2ff;
  top: 0rem;
  left: 1.95rem;
}
.ontime{
  position: absolute;
  text-align: right;
  top:0rem;
  left:2.4rem;
}
.shop_describebottom{
  position: absolute;
  height: .2rem;
  width:1rem;
  top:.48rem;
  left:.1rem;
}
.cost{
  left: 0rem;
  top: 0rem;
  font-size: .13rem;
  width:1.33rem;
}
.distance{
  left: 1.35rem;
  top: 0rem;
  width:.8rem;
  font-size: .13rem;
}
.time{
  position: absolute;
  left: 1.55rem;
  top: 0rem;
  font-size: .14rem;
  color: #26a2ff;
  width: 2rem;
}
.searchInput{
	border:.05rem solid #e4e4e4;
  color:#333;
  top:.5rem;
  width:2.7rem;
  left:.1rem;
  text-align:center;
  border-radius: .125rem;
  font-weight: 700;
  padding: 0 .25rem;
  height:.55rem;
  font-size:.124rem;
}
/*.mint-header {
  height: 140px;
  -webkit-box-align: center;
}*/
.mineDiv{
  background-color: #26a2ff;
  height:1.55rem;
  width: 100%;
  display: block;
  position: relative;
}
.qqImg {
  width: .8rem;
  height: .8rem;
  float: left;
  top:.6rem;
  left:.1rem;
  position: absolute;
  }
.mail{
  color: #fff;
  top: .7rem;
  left:1rem;
  float: left;
  font-size: .25rem;
  font-weight: 700;
  position: absolute;
}
.bindphoneImg{
 position: absolute;
 top: 1.05rem;
 left: 1rem;
 width:.3rem;
 height:.3rem;
}
.phone{
  top: 1.05rem;
  left: 1.3rem;
  color: #fff;
  position: absolute;
  font-size: .2rem;
  
}
.right{
  top: 1rem;
  right:.15rem;
  color: #fff;
  position: absolute;
  font-size:.25rem;
}
.fuli{
  position:absolute;
  color:orange;
  font-size:.3rem;
  top:.02rem;
  left:.27rem;
}
.danwei{
  position:absolute;
  font-size:.3rem;
  left:.85rem;
  top:.001rem;
}
.case{
  position: absolute;
  top: .5rem;
  left: .25rem;
  font-size:.2rem;
}
.mineImg{
  position: absolute;
  width:.3rem;
  height:.3rem;
  left:.1rem;
  top:.1rem;
}
.name{
  position: absolute;
  left:.6rem;
  top:.1rem;
  font-size:.2rem;
}
.next{
  position: absolute;
  right:.1rem;
  top:.1rem;
  font-size:.25rem;
}
</style>
