<template>
  <div>
    <ShopHeader/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/rating" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import ShopHeader from '../../components/ShopHeader/ShopHeader'
  export default {
    components:{
      ShopHeader
    },
    computed:{
    },
    mounted(){
      this.$store.dispatch('getGoods')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
