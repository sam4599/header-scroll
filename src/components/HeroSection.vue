<template>
  <div class="hero">
    <div class="bg-overlay">
      <div class="global-container container">
        <h1>СТРОИТЕЛЬСТВО ДАЧНЫХ ДОМОВ И КОТТЕДЖЕЙ</h1>
        <p>На участок поставляются готовые модули,
          производится их монтаж в короткие сроки.
          Мы гарантируем выполнение всех взятых на себя
          обязательств и доступные цены.
        </p>
        <div class="arrow-price">
          <arrow-price class="arrow"/>
          <p>РАССЧИТАТЬ СТОИМОСТЬ</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowPrice from "../assets/resource/svg/ArrowPrice.vue";

export default {
  name: 'HeroSection',
  components: {
    ArrowPrice
  }
}
</script>

<style scoped>
.container {
  margin-top: 5%;
}
.bg-overlay {
  background: url("../assets/resource/images/bg-filter.png");
  width: 100%;
  background-size: cover;
}
.hero {
  background: url("../assets/resource/images/bg-image.png") no-repeat;
  width: 100%;
  background-size: cover;
  display: flex;
}
.hero h1 {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  line-height: 55px;
  width: 55%;
}
.hero p {
  color: #dce0e5;
  font-size: 16px;
  font-weight: 500;
  width: 20%;
  margin-top: 16px;
}
.arrow {
  cursor: pointer;
}
.arrow-price {
  margin-top: 46px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding-bottom: 256px;
}
arrow-price > p {
  color: #FFF;
  font-size: 18px;
  font-weight: 500;
}
</style>

