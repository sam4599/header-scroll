<template>
  <div class="info-card">
    <div class="text-section">
      <h2> {{ title }} </h2>
      <p v-html="text"></p>
    </div>
    <img :src="svgComponent">
  </div>
</template>

<script>
import SectionInfo from "@/components/SectionInfo.vue";
export default {
  name: 'CardInfo',
  components: {
    SectionInfo
  },
  props: {
    title: String,
    text: String,
    svgComponent: String
  }
}
</script>

<style scoped>
.info-card {
  border-radius: 20px;
  display: flex;
  background: #FFFFFF;
  width: 49%;
  padding: 36px 44px;
  justify-content: space-between;
}
.text-section > p {
  margin-top: 18px;
  font-size: 16px;
  color: #666667;
}
.text-section > h2 {
  font-size: 20px;
}
</style>
