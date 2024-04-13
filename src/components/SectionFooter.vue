<template>
<div class="content-footer">
  <div class="container-footer">
    <div class="container">
      <div class="logo-section">
        <img src="./resource/images/logo-2.png">
        <div class="info">
          <h1>Полезно</h1>
          <p>Доставка и сборка</p>
          <p>Контакты</p>
          <p>Наши работы</p>
        </div>
      </div>
      <div class="contacts-section">
        <p>Пишите нам: <span><a href="mailto:domstroy-st@bk.ru">domstroy-st@bk.ru</a></span></p>
        <p class="address">Моск.обл. г.Ступино ул.Промышленная </p>
        <p class="address">Пн-Сб 9:00-18:00, Вс - выходной</p>
      </div>
      <div class="calculator-section">
        <button class="calc">ЧЕСТНЫЙ КАЛЬКУЛЯТОР БЕСЕДОК</button>
        <button class="contact">СВЯЗАТЬСЯ С НАМИ</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SectionFooter'
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 114px;
}
.content-footer {
  padding: 80px 0;
  background: #22242E;
}
.container-footer {
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
}
.info > h1 {
  margin-top: 18px;
  color: #ffffff;
}
.info > p {
  cursor: pointer;
  margin-top: 18px;
  color: #ffffff;
}
.calculator-section {
  display: flex;
  flex-direction: column;
}
.calculator-section button {
  border: 2px solid #ffc239;
  color: #ffc239;
  background: none;
  border-radius: 38px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}
.calculator-section .calc {
  padding: 18px 22px;
}
.calculator-section .contact {
  padding: 16px 52px;
  margin-top: 14px;
}
.contacts-section .address {
  margin-top: 18px;
  cursor: pointer;
}
.contacts-section {
  color: #ffffff;
}
.contacts-section a {
  color: inherit;
  text-decoration: none;
}
</style>


