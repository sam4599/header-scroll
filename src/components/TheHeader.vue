<template>
<header class="header" :class="{'fixed-header': scrollY > 0}">
  <div class="global-container">
    <div class="header-top container" >
      <div class="logo-section">
        <p>СТРОИТЕЛЬНАЯ КОМПАНИЯ</p>
        <img src="./resource/images/logo.png" alt="Logo">
      </div>
      <div class="contacts-section">
        <p>Пишите нам: <span><a href="mailto:domstroy-st@bk.ru">domstroy-st@bk.ru</a></span></p>
        <p>Моск.обл. г.Ступино ул.Промышленная </p>
        <p>Пн-Сб 9:00-18:00, Вс - выходной</p>
      </div>
      <div class="phone-section">
        <a href="tel:+74951420725">+7 (495) 142-07-25</a>
        <a href="tel:+79779080250">+7 (977) 908-02-50</a>
      </div>
      <div class="contact-links">
        <button class="button-form">
          ЗАКАЗАТЬ ЗВОНОК
        </button>
        <div class="social-contacts">
          <img src="./resource/images/youtube.png" alt="youtube">
          <img src="./resource/images/instagram.png" alt="instagram">
          <img src="./resource/images/vk.png" alt="vk">
          <img src="./resource/images/whatsapp.png" alt="whatsapp">
          <img src="./resource/images/telegram.png" alt="telegram">
        </div>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      scrollY: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = document.documentElement.scrollTop;
    }
  }
};
</script>

<style scoped>
.header-top {
  display: flex;
  justify-content: space-between;
}
.container {
  align-items: center;
}
.logo-section > p {
  font-size: 12px;
  font-weight: 600;
}
.phone-section {
  display: flex;
  flex-direction: column;
}
.button-form {
  padding: 14px 40px;
  color: #212864;
  font-size: 12px;
  border-radius: 25px;
  border: 1px solid #212864;
  background: transparent;
  font-weight: 700;
  cursor: pointer;
}
.social-contacts {
  display: flex;
  gap: 10px;
  margin: 8px 0 0 10px;
  cursor: pointer;
}
.phone-section > a {
  color: #212864;
  font-weight: 700;
}
.header {
  position: sticky;
  top: 0;
  padding: 20px 0;
  background: #fff;
  z-index: 999;
  transition: padding 0.3s ease;
}
.fixed-header {
  padding: 8px 0;
}
</style>
