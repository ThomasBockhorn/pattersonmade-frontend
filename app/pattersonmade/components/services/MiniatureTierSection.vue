<template>
  <section class="miniature-tier-section">
    <div class="miniature-tier-container">
      <div class="miniature-tier-content">
        <img
          class="miniature-tier-image"
          src="https://placehold.co/600x640"
          alt="Miniature Tier website preview"
        />
        <div class="miniature-tier-text">
          <div class="miniature-tier-header">
            <div class="miniature-tier-label">Miniature</div>
            <div class="miniature-tier-title">Elevate Your Brand with Our Miniature Tier</div>
            <div class="miniature-tier-description">
              The Miniature Tier is crafted for creators and professionals ready to expand their online presence. With a custom design and integrated portfolio, your unique style will shine through.
            </div>
          </div>
          <ul class="miniature-tier-features" aria-label="Miniature Tier Features">
            <li>
              <span class="miniature-tier-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="2" fill="#010605"/></svg>
              </span>
              <span>5-page website with a stunning portfolio and blog</span>
            </li>
            <li>
              <span class="miniature-tier-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="4" fill="#010605"/></svg>
              </span>
              <span>Tailored design that reflects your personal style</span>
            </li>
            <li>
              <span class="miniature-tier-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="4" fill="#010605"/></svg>
              </span>
              <span>Enhanced digital marketing for growing your audience</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for this static section
</script>

<style scoped>
.miniature-tier-section {
  width: 100%;
  background: #fff;
  padding: 112px 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.miniature-tier-container {
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.miniature-tier-content {
  width: 100%;
  display: flex;
  gap: 80px;
  align-items: center;
}

.miniature-tier-image {
  flex: 1 1 0;
  height: 640px;
  max-width: 100%;
  border-radius: 40px;
  object-fit: cover;
}

.miniature-tier-text {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.miniature-tier-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.miniature-tier-label {
  color: #010605;
  font-size: 16px;
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-weight: 600;
  line-height: 24px;
}

.miniature-tier-title {
  color: #010605;
  font-size: 48px;
  font-family: 'Encode Sans', Arial, sans-serif;
  font-weight: 400;
  line-height: 1.2;
}

.miniature-tier-description {
  color: #010605;
  font-size: 18px;
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-weight: 400;
  line-height: 27px;
}

.miniature-tier-features {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.miniature-tier-features li {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #010605;
  font-size: 16px;
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-weight: 400;
  line-height: 24px;
}

.miniature-tier-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  .miniature-tier-section {
    padding: 80px 32px;
  }
  .miniature-tier-content {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .miniature-tier-section {
    padding: 56px 16px;
  }
  .miniature-tier-content {
    flex-direction: column;
    gap: 32px;
  }
  .miniature-tier-image {
    height: 320px;
    border-radius: 24px;
  }
  .miniature-tier-title {
    font-size: 32px;
  }
}

@media (max-width: 480px) {
  .miniature-tier-section {
    padding: 32px 4px;
  }
  .miniature-tier-title {
    font-size: 24px;
  }
  .miniature-tier-image {
    height: 180px;
    border-radius: 16px;
  }
}
</style>
