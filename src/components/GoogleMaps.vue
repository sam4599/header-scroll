<template>
  <div class="content-maps">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11086.82508408853!2d37.557076741446224!3d55.62704906592563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab2c84bbc9121%3A0x13d7018f0c576cae!2z0K_Qt9GL0YfQtdGB0LrQvtC1INC60LDQv9C40YnQtQ!5e1!3m2!1sru!2sru!4v1710442454189!5m2!1sru!2sru" width="1920" height="770" style="border:0; margin-bottom: -4px;"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="global-container">
      <div class="contact-block">
        <h1>КОНТАКТЫ</h1>
        <h2>Адрес:</h2>
        <div class="text">
          <p>Моск.обл. г.Ступино ул.Промышленная (200м от завода "Изомин")</p>
          <p>Пн-Сб 9:00-18:00, Вс - выходной</p>
        </div>
        <div class="contacts-section">
          <h3>Контакты:</h3>
          <div class="contacts">
            <div class="number">
              <p>+7 (495) 142-07-25</p>
              <p>+7 (977) 908-02-50</p>
            </div>
            <div class="social">
              <a href="mailto:domstroy-st@bk.ru">domstroy-st@bk.ru</a>
              <div class="social-contacts">
                <img src="../assets/resource/images/youtube.png" alt="youtube">
                <img src="../assets/resource/images/instagram.png" alt="instagram">
                <img src="../assets/resource/images/vk.png" alt="vk">
                <img src="../assets/resource/images/whatsapp.png" alt="whatsapp">
                <img src="../assets/resource/images/telegram.png" alt="telegram">
              </div>
            </div>
          </div>
        </div>
        <button class="question-button">ЗАДАТЬ ВОПРОС</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoogleMaps'
}
</script>

<style scoped>
.content-maps {
  position: relative;
  max-width: 100%;
}
.contact-block {
  position: absolute;
  top: 0;
  right: 120px;
  z-index: 2;
  background-color: #ffffff;
  padding: 92px 0 72px 64px;
  width: 34%;
  border-radius: 0 0 20px 20px;
  border: 1px solid #f1f3f4;
}
.contact-block > h2 {
  margin-top: 34px;
}
.text {
  margin-top: 16px;
}
.question-button {
  background-color: #FFC239;
  margin-top: 80px;
  padding: 18px 54px;
  border-radius: 30px;
  border: none;
  color: #212864;
  font-size: 18px;
  font-weight: 700;
}
.contacts-section {
  margin-top: 54px;
}
.contacts {
  display: flex;
  align-items: baseline;
  gap: 80px;
}
.number {
  margin-top: 20px;
}
.social-contacts {
  display: flex;
  margin-top: 10px;
  gap: 8px;
}
.number p:nth-child(2) {
  margin-top: 10px;
}
.text p:nth-child(1) {
  width: 60%;
  margin-bottom: 10px;
}
.text p:nth-child(2) {
  margin-top: 10px;
}
</style>



