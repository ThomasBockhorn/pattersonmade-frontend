<template>
  <section class="toy-tier-section">
    <div class="toy-tier-container">
      <div class="toy-tier-flex">
        <div class="toy-tier-content">
          <div class="toy-tier-content-group">
            <div class="toy-tier-label-row">
              <span class="toy-tier-label">Toy</span>
            </div>
            <div class="toy-tier-title-group">
              <h2 class="toy-tier-title">Start Your Digital Journey with Our Toy Tier</h2>
              <p class="toy-tier-desc">The Toy Tier is an excellent choice for individuals and businesses looking to establish their online presence. With a custom-designed, 1-page static website, you will benefit from a user-friendly experience that combines a simple yet elegant design, allowing you to effectively showcase your brand to potential customers. This setup not only highlights your products or services but also creates a professional image that can attract and retain visitors.</p>
            </div>
          </div>
          <div class="toy-tier-features">
            <div class="toy-tier-feature">
              <span class="toy-tier-feature-icon toy-tier-feature-icon1"></span>
              <span class="toy-tier-feature-text">Includes basic SEO and Google presence setup.</span>
            </div>
            <div class="toy-tier-feature">
              <span class="toy-tier-feature-icon toy-tier-feature-icon2"></span>
              <span class="toy-tier-feature-text">Ideal for individuals and small businesses starting out.</span>
            </div>
            <div class="toy-tier-feature">
              <span class="toy-tier-feature-icon toy-tier-feature-icon3"></span>
              <span class="toy-tier-feature-text">Crafted with care to reflect your unique identity.</span>
            </div>
          </div>
        </div>
        <img class="toy-tier-img" src="https://placehold.co/600x640" alt="Toy Tier website example" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props for now
</script>

<style scoped>
.toy-tier-section {
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
.toy-tier-container {
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
}
.toy-tier-flex {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
}
.toy-tier-content {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.toy-tier-content-group {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.toy-tier-label-row {
  display: flex;
  align-items: center;
}
.toy-tier-label {
  color: #010605;
  font-size: 16px;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 600;
  line-height: 24px;
}
.toy-tier-title-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.toy-tier-title {
  color: #010605;
  font-size: 48px;
  font-family: 'Encode Sans', sans-serif;
  font-weight: 400;
  line-height: 57.6px;
}
.toy-tier-desc {
  color: #010605;
  font-size: 18px;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 27px;
}
.toy-tier-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0;
}
.toy-tier-feature {
  display: flex;
  align-items: center;
  gap: 16px;
}
.toy-tier-feature-icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  position: relative;
}
.toy-tier-feature-icon1::before {
  content: '';
  position: absolute;
  left: 1.31px;
  top: 2.56px;
  width: 13.39px;
  height: 10.87px;
  background: #010605;
  border-radius: 2px;
}
.toy-tier-feature-icon2::before {
  content: '';
  position: absolute;
  left: 1.23px;
  top: 1.14px;
  width: 13.54px;
  height: 12.96px;
  background: #010605;
  border-radius: 2px;
}
.toy-tier-feature-icon3::before {
  content: '';
  position: absolute;
  left: 1.90px;
  top: 1.08px;
  width: 12.20px;
  height: 13.85px;
  background: #010605;
  border-radius: 2px;
}
.toy-tier-feature-text {
  flex: 1 1 0;
  color: #010605;
  font-size: 16px;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 24px;
}
.toy-tier-img {
  flex: 1 1 0;
  height: 640px;
  border-radius: 40px;
  object-fit: cover;
  width: 100%;
  max-width: 600px;
  display: block;
}
@media (max-width: 1200px) {
  .toy-tier-flex {
    gap: 40px;
  }
  .toy-tier-img {
    height: 400px;
    max-width: 400px;
  }
}
@media (max-width: 900px) {
  .toy-tier-section {
    padding: 64px 24px;
    gap: 40px;
  }
  .toy-tier-container {
    gap: 40px;
  }
  .toy-tier-flex {
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;
  }
  .toy-tier-img {
    height: 320px;
    max-width: 100%;
    border-radius: 24px;
  }
  .toy-tier-title {
    font-size: 32px;
    line-height: 40px;
  }
}
@media (max-width: 600px) {
  .toy-tier-section {
    padding: 32px 8px;
    gap: 24px;
  }
  .toy-tier-container {
    gap: 24px;
  }
  .toy-tier-flex {
    gap: 16px;
  }
  .toy-tier-title {
    font-size: 20px;
    line-height: 28px;
  }
  .toy-tier-desc {
    font-size: 15px;
    line-height: 22px;
  }
  .toy-tier-img {
    height: 180px;
    border-radius: 12px;
  }
}
</style>
