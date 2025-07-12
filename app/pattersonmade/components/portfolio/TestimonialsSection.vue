<template>
  <section class="testimonials-section">
    <div class="testimonials-container">
      <div class="testimonials-header">
        <h2 class="testimonials-title">Client Testimonials</h2>
        <p class="testimonials-desc">PattersonMade transformed our online presence completely!</p>
      </div>
      <div class="testimonials-list">
        <!-- Testimonial 1 -->
        <div class="testimonial">
          <div class="testimonial-stars">
            <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
          </div>
          <div class="testimonial-quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
          <div class="testimonial-person">
            <img class="testimonial-avatar" src="https://placehold.co/56x56" alt="Jane Doe avatar" />
            <div class="testimonial-person-info">
              <div class="testimonial-name">Jane Doe</div>
              <div class="testimonial-role">CEO, Artistry Co.</div>
            </div>
            <span class="testimonial-logo"></span>
          </div>
        </div>
        <!-- Testimonial 2 -->
        <div class="testimonial">
          <div class="testimonial-stars">
            <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
          </div>
          <div class="testimonial-quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
          <div class="testimonial-person">
            <img class="testimonial-avatar" src="https://placehold.co/56x56" alt="John Smith avatar" />
            <div class="testimonial-person-info">
              <div class="testimonial-name">John Smith</div>
              <div class="testimonial-role">Founder, Tech Innovations</div>
            </div>
            <span class="testimonial-logo"></span>
          </div>
        </div>
        <!-- Testimonial 3 -->
        <div class="testimonial">
          <div class="testimonial-stars">
            <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
          </div>
          <div class="testimonial-quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
          <div class="testimonial-person">
            <img class="testimonial-avatar" src="https://placehold.co/56x56" alt="Name Surname avatar" />
            <div class="testimonial-person-info">
              <div class="testimonial-name">Name Surname</div>
              <div class="testimonial-role">Position, Company name</div>
            </div>
            <span class="testimonial-logo"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props for now
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
}
</style>
