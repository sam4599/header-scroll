<template>
  <div class="family-section">
    <div class="image-container">
    </div>
    <div class="text-container">
      <h2>Мы работаем c<br><span>материнским капиталом!</span></h2>
      <div class="circle">Оставить<br>заявку</div>
      <div class="arrows">
        <arrow-family-left/>
        <span>1/2</span>
        <arrow-family-right/>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowFamilyLeft from "@/components/resource/svg/ArrowFamilyLeft.vue";
import ArrowFamilyRight from "@/components/resource/svg/ArrowFamilyRight.vue";
export default {
  name: 'SectionFamily',
  components: {
    ArrowFamilyRight,
    ArrowFamilyLeft
  }
}
</script>

<style scoped>
.family-section {
  display: flex;
  background-color: #eee;
}
.image-container {
  background: url("./resource/images/bg-family.jpg");
  background-size: cover;
}
.image-container, .text-container {
  flex: 1;
}
h2 {
  font-weight: 400;
  padding: 80px 0 0 64px;
}
h2 > span {
  font-weight: 700;
}
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 141px;
  height: 141px;
  border-radius: 50%;
  border: 1px solid #D79500;
  font-size: 16px;
  color: #212864;
  font-weight: 700;
  margin: 52px 0 0 64px;
}
.arrows {
  display: flex;
  justify-content: end;
  margin: 48px 78px;
  gap: 10px;
}
.arrows > span {
  font-weight: 700;
}
</style>
