<template>
  <div>
    <scroll-button/>
    <the-header/>
    <nav-bar/>
    <catalog-bar/>
    <hero-section/>
    <product-cards/>
    <section-family/>
    <info-card/>
    <google-maps/>
    <section-footer/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import NavBar from "@/components/NavBar.vue";
import CatalogBar from "@/components/CatalogBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProductCards from "@/components/ProductCards.vue";
import SectionFamily from "@/components/SectionFamily.vue";
import InfoCard from "@/components/SectionInfo.vue";
import GoogleMaps from "@/components/GoogleMaps.vue";
import SectionFooter from "@/components/SectionFooter.vue";
import ScrollButton from "@/components/ScrollButton.vue";

export default {
  name: 'App',
  components: {
    ScrollButton,
    SectionFooter,
    GoogleMaps,
    InfoCard,
    SectionFamily,
    ProductCards,
    HeroSection,
    CatalogBar,
    NavBar,
    TheHeader
  }
}
</script>

