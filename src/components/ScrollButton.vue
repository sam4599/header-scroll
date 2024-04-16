<template>
  <div>
    <div v-if="showScrollButton" @click="scrollToTop()" class="scroll-to-top">
      <double-arrow-top/>
    </div>
  </div>
</template>

<script>
import DoubleArrowTop from "../assets/resource/svg/ DoubleArrowTop.vue";

export default {
  name: 'ScrollButton',
  components: {
    DoubleArrowTop
  },
  data() {
    return {
      showScrollButton: false
    }
  },
  mounted() {
    addEventListener('scroll', this.hasScroll)
  },
  methods: {
    hasScroll() {
      this.showScrollButton = window.scrollY > 0
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  width: 44px;
  height: 38px;
  background: #555555;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.5;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
}
.scroll-to-top:hover {
  opacity: 1;
}
</style>

