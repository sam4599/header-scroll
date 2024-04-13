<template>
  <div class="section-card">
    <div class="global-container">
      <div class="info-card">
        <h1>Наши приемущества</h1>
        <div class="text-section">
          <h2>Работаем строго по договору</h2>
          <p>Стоимость строительсва фиксированная.
            И все наши обязательства прописаны в договоре.
          </p>
          <agreement-svg/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AgreementSvg from "@/components/resource/svg/InfoSvg/AgreementSvg.vue";

export default {
  name: 'InfoCard',
  components: {AgreementSvg}
}
</script>

<style scoped>
.section-card {
  background: url("./resource/images/bg-info-card.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>