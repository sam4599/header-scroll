<template>
  <div class="cards-list">
    <img :src="imageSrc">
    <h2>{{ title }}</h2>
    <div class="parameters-house">
      <div class="parameters">
        <p>Размер:</p>
        <span>{{ size }}</span>
      </div>
      <div class="parameters">
        <p>Площадь:</p>
        <span>{{ area }}</span>
      </div>
      <div class="parameters">
        <p>Количество комнат:</p>
        <span>{{ rooms }}</span>
      </div>
      <span class="price">{{ price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionCards',
  props: {
    imageSrc: String,
    title: String,
    size: String,
    area: String,
    rooms: String,
    price: String
  }
}
</script>

<style scoped>
.cards-list {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  max-width: 284px;
  box-shadow: 3px 4px 33px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
.parameters{
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.60);
  font-size: 16px;
  font-weight: 400;
}
.parameters span {
  display: flex;
  margin-right: 20px;
}
.price {
  display: flex;
  margin-top: 28px;
  color: #000;
  font-size: 22px;
  font-weight: 700;
  padding-bottom: 36px;
}
.cards-list h2 {
  margin-top: 18px;
  color: #000;
  line-height: 20px;
}
.cards-list h2,
.cards-list .parameters,
.cards-list .price {
  margin-left: 22px;
}
.parameters-house {
  margin-top: 18px;
}
</style>

