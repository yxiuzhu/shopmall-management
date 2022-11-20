<template>
  <div>
    <Card></Card>
    <Sale></Sale>
    <Observe></Observe>
  </div>
</template>

<script>
import Sale from './Sale'
import Card from './Card'
import Observe from './Observe'
export default {
  name: '',
  components: {
    Card,
    Sale,
    Observe
  },
  mounted() {
    this.$store.dispatch('getData')
    // 获取排行榜数据
    this.$store.dispatch('getRank', 'sale')
  }
}
</script>

<style scoped></style>
