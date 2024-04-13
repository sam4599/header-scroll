<template>
  <div class="info-card">
    <div class="text-section">
      <h2> {{ title }} </h2>
      <p> {{ text }} </p>
    </div>
    {{ svgComponent }}
  </div>
</template>

<script>
import SectionInfo from "@/components/SectionInfo.vue";
export default {
  name: 'InfoCard',
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

<style>
.info-card {
  border-radius: 20px;
  display: flex;
  background: #FFFFFF;
  width: 50%;
  padding: 36px 44px;
  margin-top: 52px;
}
.text-section > p {
  margin-top: 18px;
  font-size: 14px;
  color: #666667;
}
.text-section > h2 {
  font-size: 20px;
}
</style>