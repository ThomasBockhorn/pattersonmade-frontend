<template>
  <section class="testimonials-section" aria-labelledby="testimonials-title">
    <div class="testimonials-container">
      <header class="testimonials-header">
        <h2 id="testimonials-title" class="testimonials-title">Client Testimonials</h2>
        <p class="testimonials-desc">PattersonMade transformed our online presence completely!</p>
      </header>
      <div class="testimonials-list" :class="{ 'is-slider': isMobile }">
        <template v-if="isMobile">
          <article class="testimonial" v-for="(testimonial, idx) in [testimonials[currentIndex]]" :key="testimonial.name">
            <div class="testimonial-stars" aria-label="5 star rating">
              <span class="star" aria-hidden="true"></span><span class="star" aria-hidden="true"></span><span class="star" aria-hidden="true"></span><span class="star" aria-hidden="true"></span><span class="star" aria-hidden="true"></span>
            </div>
            <blockquote class="testimonial-quote">{{ testimonial.quote }}</blockquote>
            <footer class="testimonial-person">
              <img class="testimonial-avatar" :src="testimonial.avatar" :alt="testimonial.name + ' avatar'" />
              <div class="testimonial-person-info">
                <span class="testimonial-name">{{ testimonial.name }}</span>
                <span class="testimonial-role">{{ testimonial.role }}</span>
              </div>
              <span class="testimonial-logo" aria-hidden="true"></span>
            </footer>
          </article>
          <div class="testimonial-slider-controls">
            <button class="slider-btn" @click="prevTestimonial" :disabled="currentIndex === 0" aria-label="Previous testimonial">&#8592;</button>
            <span class="slider-indicator">{{ currentIndex + 1 }} / {{ testimonials.length }}</span>
            <button class="slider-btn" @click="nextTestimonial" :disabled="currentIndex === testimonials.length - 1" aria-label="Next testimonial">&#8594;</button>
          </div>
        </template>
        <template v-else>
          <article class="testimonial" v-for="testimonial in testimonials" :key="testimonial.name">
            <div class="testimonial-stars" aria-label="5 star rating">
              <span class="star" aria-hidden="true"></span><span class="star" aria-hidden="true"></span><span class="star" aria-hidden="true"></span><span class="star" aria-hidden="true"></span><span class="star" aria-hidden="true"></span>
            </div>
            <blockquote class="testimonial-quote">{{ testimonial.quote }}</blockquote>
            <footer class="testimonial-person">
              <img class="testimonial-avatar" :src="testimonial.avatar" :alt="testimonial.name + ' avatar'" />
              <div class="testimonial-person-info">
                <span class="testimonial-name">{{ testimonial.name }}</span>
                <span class="testimonial-role">{{ testimonial.role }}</span>
              </div>
              <span class="testimonial-logo" aria-hidden="true"></span>
            </footer>
          </article>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CEO, Artistry Co.',
    avatar: 'https://placehold.co/56x56',
    quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  },
  {
    name: 'John Smith',
    role: 'Founder, Tech Innovations',
    avatar: 'https://placehold.co/56x56',
    quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  },
  {
    name: 'Name Surname',
    role: 'Position, Company name',
    avatar: 'https://placehold.co/56x56',
    quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  },
];

const isMobile = ref(false);
const currentIndex = ref(0);

function checkMobile() {
  isMobile.value = window.innerWidth <= 600;
}

function nextTestimonial() {
  if (currentIndex.value < testimonials.length - 1) currentIndex.value++;
}
function prevTestimonial() {
  if (currentIndex.value > 0) currentIndex.value--;
}

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
.testimonials-section {
  align-self: stretch;
  padding: 112px 64px;
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
}
.testimonials-container {
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
}
.testimonials-header {
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}
.testimonials-title {
  color: #010605;
  font-size: 48px;
  font-family: 'Encode Sans', sans-serif;
  font-weight: 400;
  line-height: 57.6px;
}
.testimonials-desc {
  color: #010605;
  font-size: 18px;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 27px;
}
.testimonials-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 32px;
  flex-wrap: wrap;
}
.testimonial {
  flex: 1 1 0;
  min-width: 280px;
  max-width: 405px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: hidden;
}
.testimonial-stars {
  display: flex;
  gap: 4px;
}
.star {
  width: 20px;
  height: 18.89px;
  background: #010605;
  display: inline-block;
  border-radius: 4px;
}
.testimonial-quote {
  color: #010605;
  font-size: 20px;
  font-family: 'Encode Sans', sans-serif;
  font-weight: 400;
  line-height: 28px;
}
.testimonial-person {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}
.testimonial-avatar {
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  object-fit: cover;
}
.testimonial-person-info {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.testimonial-name {
  color: #010605;
  font-size: 16px;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 600;
  line-height: 24px;
}
.testimonial-role {
  color: #010605;
  font-size: 16px;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 24px;
}
.testimonial-logo {
  width: 120px;
  height: 48px;
  display: block;
  background: #010605;
  border-radius: 8px;
  margin-top: 8px;
  position: relative;
}
.testimonial-slider-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
}
.slider-btn {
  background: #510E72;
  color: white;
  border: none;
  border-radius: 100px;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s;
}
.slider-btn:disabled {
  background: #ccc;
  color: #fff;
  cursor: not-allowed;
}
.slider-indicator {
  color: #010605;
  font-size: 16px;
  font-family: 'Source Sans 3', sans-serif;
}
@media (max-width: 900px) {
  .testimonials-section {
    padding: 64px 24px;
    gap: 40px;
  }
  .testimonials-title {
    font-size: 32px;
    line-height: 40px;
  }
  .testimonials-container {
    gap: 40px;
  }
  .testimonials-list {
    flex-direction: column;
    gap: 32px;
  }
}
@media (max-width: 600px) {
  .testimonials-section {
    padding: 32px 8px;
    gap: 24px;
  }
  .testimonials-title {
    font-size: 20px;
    line-height: 28px;
  }
  .testimonials-desc {
    font-size: 15px;
    line-height: 22px;
  }
  .testimonial-quote {
    font-size: 16px;
    line-height: 22px;
  }
  .testimonial-avatar {
    width: 40px;
    height: 40px;
  }
  .testimonial-logo {
    width: 80px;
    height: 32px;
  }
  .testimonials-list {
    flex-direction: column;
    gap: 0;
  }
  .testimonial {
    max-width: 100%;
  }
}
</style>
