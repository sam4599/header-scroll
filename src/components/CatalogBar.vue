<template>
<div class="container">
  <div class="global-container">
    <nav class="navigation-menu">
      <a href="#" class="menu-link">Каталог домов</a>
      <a href="#" class="menu-link">Каталог бытовок</a>
      <a href="#" class="menu-link">Каталог беседок</a>
      <a href="#" class="menu-link">Каталог бань</a>
      <a href="#" class="menu-link">Каталог хоз. построек</a>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  name: 'CatalogBar'
}
</script>

<style scoped>
.container {
  background: #8C93D1;
}
.navigation-menu {
  display: flex;
  padding: 18px 0;
  justify-content: space-between;
}
.navigation-menu > a {
  text-decoration: none;
  color: #FFFFFF;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 18px;
}
</style>
