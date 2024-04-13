<template>
  <div class="global-container">
    <h1>Предложения для вас</h1>
    <div class="toggle-bar">
      <button class="toggle">Каркасные дома</button>
      <button class="toggle">Бани</button>
      <button class="toggle">Беседки</button>
      <button class="toggle">Бытовки</button>
      <button class="toggle">Хоз. постройки</button>
    </div>
    <div class="container-cards" :class="{'cards-bottom': !hasMoreCards}">
      <section-cards
        v-for="card in displayedCards"
        :key="card.id"
        :imageSrc="card.imageSrc"
        :title="card.title"
        :size="card.size"
        :area="card.area"
        :rooms="card.rooms"
        :price="card.price"
      />
    </div>
  <button class="show-more-button" v-if="!isLoading && hasMoreCards" @click="showMoreCards()">Показать ещё</button>
  <loader-circle v-if="isLoading" />
</div>
</template>

<script>
import SectionCards from "@/components/SectionCards.vue";
import loaderCircle from "@/components/LoaderCircle.vue";

export default {
  name: 'ProductCards',
  components: {
    SectionCards,
    loaderCircle
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          imageSrc: require('./resource/images/card-1.png'),
          title: 'Каркасный дом с балконом LK-1',
          size: '4х6 м',
          area: '34.8 м2',
          rooms: '3 шт',
          price: '940 000 ₽'
        },
        {
          id: 2,
          imageSrc: require('./resource/images/card-2.png'),
          title: 'Каркасный дом с балконом LK-2',
          size: '5х7 м',
          area: '40.5 м2',
          rooms: '4 шт',
          price: '1 050 000 ₽'
        },
        {
          id: 3,
          imageSrc: require('./resource/images/card-3.png'),
          title: 'Каркасный дом с балконом LK-3',
          size: '4х6 м',
          area: '34.8 м2',
          rooms: '3 шт',
          price: '980 000'
        },
        {
          id: 4,
          imageSrc: require('./resource/images/card-4.png'),
          title: 'Каркасный дом с балконом LK-4',
          size: '5х8 м',
          area: '43.2 м2',
          rooms: '4 шт',
          price: '1 250 000 ₽'
        },
        {
          id: 5,
          imageSrc: require('./resource/images/card-5.png'),
          title: 'Каркасный дом с балконом LK-5',
          size: '4х6 м',
          area: '34.8 м2',
          rooms: '3 шт',
          price: '940 000 ₽'
        },
        {
          id: 6,
          imageSrc: require('./resource/images/card-6.png'),
          title: 'Каркасный дом с балконом LK-6',
          size: '5х7 м',
          area: '40.5 м2',
          rooms: '4 шт',
          price: '1 050 000 ₽'
        },
        {
          id: 7,
          imageSrc: require('./resource/images/card-7.png'),
          title: 'Каркасный дом с балконом LK-7',
          size: '4х6 м',
          area: '34.8 м2',
          rooms: '3 шт',
          price: '880 000'
        },
        {
          id: 8,
          imageSrc: require('./resource/images/card-8.png'),
          title: 'Каркасный дом с балконом LK-8',
          size: '5х8 м',
          area: '43.2 м2',
          rooms: '4 шт',
          price: '1 150 000 ₽'
        },
        {
          id: 9,
          imageSrc: require('./resource/images/card-9.png'),
          title: 'Каркасный дом с балконом LK-9',
          size: '5х8 м',
          area: '43.2 м2',
          rooms: '4 шт',
          price: '1 200 000 ₽'
        },
        {
          id: 10,
          imageSrc: require('./resource/images/card-10.png'),
          title: 'Каркасный дом с балконом LK-10',
          size: '5х8 м',
          area: '43.2 м2',
          rooms: '4 шт',
          price: '1 100 000 ₽'
        },
        {
          id: 11,
          imageSrc: require('./resource/images/card-11.png'),
          title: 'Каркасный дом с балконом LK-11',
          size: '4х6 м',
          area: '34.8 м2',
          rooms: '3 шт',
          price: '940 000 ₽'
        },
        {
          id: 12,
          imageSrc: require('./resource/images/card-12.png'),
          title: 'Каркасный дом с балконом LK-12',
          size: '5х7 м',
          area: '40.5 м2',
          rooms: '4 шт',
          price: '1 050 000 ₽'
        },
        {
          id: 13,
          imageSrc: require('./resource/images/card-13.png'),
          title: 'Каркасный дом с балконом LK-13',
          size: '4х6 м',
          area: '34.8 м2',
          rooms: '3 шт',
          price: '880 000'
        },
        {
          id: 14,
          imageSrc: require('./resource/images/card-14.png'),
          title: 'Каркасный дом с балконом LK-14',
          size: '5х8 м',
          area: '43.2 м2',
          rooms: '4 шт',
          price: '1 150 000 ₽'
        },
        {
          id: 15,
          imageSrc: require('./resource/images/card-15.png'),
          title: 'Каркасный дом с балконом LK-15',
          size: '5х8 м',
          area: '43.2 м2',
          rooms: '4 шт',
          price: '1 200 000 ₽'
        },
      ],
      displayedCards: [],
      batchSize: 5,
      hasMoreCards: true,
      isLoading: false
    }
  },
  mounted() {
    this.showMoreCards()
  },
  methods: {
    showMoreCards() {
      this.isLoading = true;

      setTimeout(() => {
        const startIndex = this.displayedCards.length
        const endIndex = startIndex + this.batchSize

        if (endIndex >= this.cards.length) {
          this.displayedCards = this.displayedCards.concat(this.cards.slice(startIndex))
          this.hasMoreCards = false
        } else {
          this.displayedCards = this.displayedCards.concat(this.cards.slice(startIndex, endIndex))
        }

        this.isLoading = false;
      }, 1000);
    }
  }
}
</script>

<style scoped>
h1 {
  color: #000;
  font-size: 42px;
  font-weight: 700;
  margin-top: 88px;
}
.toggle-bar {
  display: flex;
  gap: 10px;
}
.toggle {
  padding: 12px 36px;
  border: none;
  border-radius: 25px;
  background: #EEE;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.10);
  color: #212864;
  font-size: 20px;
  font-weight: 600;
  margin-top: 32px;
}
.toggle:nth-child(1) {
  background: #FFC239;
}
.container-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}
.show-more-button {
  padding: 12px 36px;
  border: none;
  border-radius: 25px;
  background: #353D83;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
  margin: 32px auto;
  display: block;
}
.cards-bottom {
  margin-bottom: 88px;
}
</style>




