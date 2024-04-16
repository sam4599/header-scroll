<template>
  <div class="section-card">
    <div class="bg-overlay">
      <div class="global-container">
        <h1>Наши преимущества</h1>
        <div class="card-wrapper">
          <card-info
            v-for="card in InfoCards"
            :key="card.id"
            :title="card.title"
            :text="card.text"
            :svgComponent="card.svgComponent"
          />
        </div>
      </div>
    </div>
        <div class="bg-overlay-offer">
          <div class="global-container">
            <div class="section-offer">
              <div class="text-offer">
                <h2><span class="want">Хотите узнавать</span> о строящихся объектах, акциях и спецпредложениях?</h2>
                <p>Подпишитесь на нашу группу ВКонтакте и узнавайте свежие новости и полезную информацию раньше всех!</p>
              </div>
              <div class="submit">
                <button class="offer-button">ПОДПИСАТЬСЯ НА ГРУППУ В КОНТАКТЕ</button>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import CardInfo from "@/components/CardInfo.vue";

export default {
  name: 'SectionInfo',
  components: {
    CardInfo
  },
  data() {
    return {
      InfoCards: [
        {
          id: 1,
          title: 'Работаем строго по договору',
          text: 'Стоимость строительства фиксированная.<br>И все наши обязательства прописаны в договоре.',
          svgComponent: require('../assets/resource/svg/SvgInfo/certificate (1).svg')
        },
        {
          id: 2,
          title: 'Выставка и собственное производство',
          text: 'Лучшее соотношение цены и качества. К нам возвращаются наши клиенты и рекомендуют своим знакомым.',
          svgComponent: require('../assets/resource/svg/SvgInfo/badge.svg')
        },
        {
          id: 3,
          title: 'Честная цена и понятные условия',
          text: 'Поэтапная оплата. Нет скрытых платежей и мелких шрифтов.\n',
          svgComponent: require('../assets/resource/svg/SvgInfo/money-sack.svg')
        },
        {
          id: 4,
          title: 'Экологически чистый материал',
          text: 'Сертифицированные, экологичные материалы от проверенных поставщиков.',
          svgComponent: require('../assets/resource/svg/SvgInfo/goal 2.svg')
        },
        {
          id: 5,
          title: 'Фотоотчет процесса строительства',
          text: 'Бесплатный фото или видео отчет <br>(по договорённости)',
          svgComponent: require('../assets/resource/svg/SvgInfo/running-man 2.svg')
        },
        {
          id: 6,
          title: 'Гарантийное обслуживание любой постройки',
          text: 'Даем гарантию не на словах.',
          svgComponent: require('../assets/resource/svg/SvgInfo/receipt.svg')
        },
        {
          id: 7,
          title: 'Более 7 лет опыта',
          text: 'Современное и качественное строительство, опытными бригадами.',
          svgComponent: require('../assets/resource/svg/SvgInfo/certificate.svg')
        },
        {
          id: 8,
          title: 'Индивидуальные проекты',
          text: 'Возможны изменения проектов из каталога и строительство по индивидуальным планам.',
          svgComponent: require('../assets/resource/svg/SvgInfo/quality.svg')
        }

      ]
    }
  }
}
</script>

<style scoped>
.bg-overlay {
  background: url("../assets/resource/images/bg-filter-info.png");
  width: 100%;
  background-size: cover;
  padding-bottom: 94px;
}
.bg-overlay-offer {
  background: url("../assets/resource/images/bg-filter-2.png");
  width: 100%;
  background-size: cover;
  padding: 112px 0 132px 0;
}
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 52px;
}
.global-container > h1 {
  padding-top: 84px;
}
.section-card {
  background: url("../assets/resource/images/bg-info-card.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
}
.offer-button {
  font-size: 18px;
  font-weight: 700;
  padding: 24px 44px;
  border-radius: 30px;
  color: #ffffff;
  background: #353D83;
  border: none;
}
.section-offer {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.text-offer {
  width: 38%;
}
.text-offer > h2 {
  font-weight: 400;
  font-size: 30px;
}
.want {
  font-weight: 700;
}
.text-offer > p {
  margin-top: 28px;
  color: #666667;
}
</style>
