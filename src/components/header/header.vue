<template>
  <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" :src="sellers.avatar" >
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{ sellers.name }}</span>
          </div>
          <div class="description">
            <span>{{ sellers.description }}/{{ sellers.deliveryTime }}</span>
          </div>
          <div class="supports" v-if="sellers.supports">
            <span class="icon" :class="this.classMap[sellers.supports[0].type]"></span>
            <span class="text">{{ sellers.supports[0].description }}</span>
          </div>
        </div>
      </div>
      <div class="bulletin-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['sellers'],
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'
  .header
    color: #fff
    background: #000
    .content-wrapper
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        vertical-top: top
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        font-size: 14px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            margin-right: 6px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            font-size: 16px
            font-weight: bold
            line-height: 18px
      .description
        margin-bottom: 10px
        font-size: 12px
        line-height: 12px
      .supports
        font-size: 0
        line-height: 12px
        .icon
          display: inline-block
          vertical-align: top
          margin-right: 4px
          width: 12px
          height: 12px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          line-height: 12px
          font-size: 10px


</style>


