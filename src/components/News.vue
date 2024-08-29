<template>
  <div class="mt-6">
    <h2 class="text-md font-semibold px-6">PCS News</h2>

    <div class="news-slider w-full">
      <swiper-container v-bind="swiperOptions">
        <swiper-slide v-for="(item, index) in newsItems" :key="index" class="swiper-slide">
          <div class="news-item bg-white p-4 rounded-xl shadow-card">

            <div class="flex justify-between items-center pb-3">
              <div class="flex items-center">
                <img :src="item.avatar" alt="avatar" class="rounded-full w-10 h-10" />
                <h3 class="text-primary font-bold ml-3">{{ item.title }}</h3>
              </div>

              <div class="text-right">
                <p class="text-xs">{{ item.day }}</p>
                <p class="text-xs">{{ item.date }}</p>
              </div>
            </div>

            <p v-for="(content, index) in item.content" class="mt-2 text-gray-700 text-xs">{{ content }}</p>
        </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<script setup>
import { SwiperContainer, SwiperSlide } from '@/plugins/swiper';

const dummyContent = [
  'Kalimat 1 - Lorem ipsum dolor sit amet consec',
  'Kalimat 2 - Lorem ipsum dolor sit amet consec',
  'Kalimat 3 - Lorem ipsum dolor sit amet consec',
  'Kalimat 4 - Lorem ipsum dolor sit amet consec'
];

const newsItems = [
  { 
    title: 'Sulthon Syariff',
    avatar: 'https://i.pravatar.cc/100?img=13',
    day: 'Selasa',
    date: '31 Mei 2022',
    content: dummyContent
  },
  { 
    title: 'Ana Riswati', 
    avatar: 'https://i.pravatar.cc/100?img=9',
    day: 'Senin', 
    date: '30 Mei 2022', 
    content: dummyContent 
  },
  { 
    title: 'John Doe', 
    avatar: 'https://i.pravatar.cc/100?img=11',
    day: 'Rabu', 
    date: '01 Juni 2022', 
    content: dummyContent 
  },
];

const swiperOptions = {
  initialSlide: 1,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  pagination: {
    type: 'bullets',
    dynamicBullets: true,
    bulletActiveClass: 'swiper-pagination-bullet-active',
    clickable: true,
  },
};

</script>

<style lang="scss" scoped>
.swiper-slide {
  width: 80% !important;
  padding: 10px;
  margin-top: 6px;
  margin-bottom: 26px;
}

::v-deep {
  .swiper-pagination-bullet-active {
    @apply bg-primary
  }
}
</style>