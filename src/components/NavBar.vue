<template>
  <div class="container">
    <div class="global-container">
      <nav class="navigation-menu">
        <a href="#">Главная</a>
        <a href="#">Комплектация</a>
        <a href="#">Заказчику</a>
        <a href="#">Доставка и сборка</a>
        <a href="#">Наши работы</a>
        <a href="#">Контакты</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.container {
  background: #15193D;
}
.navigation-menu {
  display: flex;
  justify-content: space-between;
  padding: 18px 0 22px 0;
  color: #FFFFFF;
}
.navigation-menu > a {
  text-decoration: none;
  color: #FFFFFF;
  font-size: 18px;
}
a:nth-child(1) {
  color: #FFC239;
}
</style>
