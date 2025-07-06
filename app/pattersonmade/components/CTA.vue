<template>
  <div class="cta-section">
    <div class="cta-bg-overlay"></div>
    <div class="cta-inner">
      <div class="cta-content">
        <div class="cta-text-group">
          <div class="cta-title">Let's Build Your Dream Website</div>
          <div class="cta-desc">You’ve poured your soul into your work — now let’s design a space that reflects it.</div>
        </div>
        <div class="cta-btn-row">
          <div class="cta-btn">
            <div class="cta-btn-text">Inquire</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this static CTA section
</script>

<style scoped>
.cta-section {
  position: relative;
  align-self: stretch;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 112px;
  padding-bottom: 112px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);
  overflow: hidden;
  background-image: url('public/img/artistspace.jpg');
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
  display: flex;
}
.cta-bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 0;
  pointer-events: none;
}
.cta-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 80px;
  display: flex;
}
.cta-content {
  width: 100%;
  max-width: 768px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: flex;
}
.cta-text-group {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
}
.cta-title {
  align-self: stretch;
  color: var(--Color-White, white);
  font-size: 48px;
  font-family: Encode Sans;
  font-weight: 400;
  line-height: 57.6px;
  word-wrap: break-word;
}
.cta-desc {
  align-self: stretch;
  color: var(--Color-White, white);
  font-size: 18px;
  font-family: Source Sans 3;
  font-weight: 400;
  line-height: 27px;
  word-wrap: break-word;
}
.cta-btn-row {
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}
.cta-btn {
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: var(--Color-Persian-Indigo, #510E72);
  border-radius: 100px;
  outline: 1px var(--Color-Persian-Indigo, #510E72) solid;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
}
.cta-btn-text {
  color: var(--Color-White, white);
  font-size: 16px;
  font-family: Source Sans 3;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}
@media (max-width: 1024px) {
  .cta-section {
    padding-left: 32px !important;
    padding-right: 32px !important;
    padding-top: 64px !important;
    padding-bottom: 64px !important;
    gap: 40px !important;
  }
  .cta-inner {
    gap: 40px !important;
  }
  .cta-content {
    gap: 24px !important;
  }
  .cta-title {
    font-size: 32px !important;
    line-height: 40px !important;
  }
}
@media (max-width: 700px) {
  .cta-section {
    padding-left: 12px !important;
    padding-right: 12px !important;
    padding-top: 32px !important;
    padding-bottom: 32px !important;
    gap: 24px !important;
  }
  .cta-inner {
    gap: 24px !important;
  }
  .cta-content {
    gap: 16px !important;
  }
  .cta-title {
    font-size: 22px !important;
    line-height: 28px !important;
  }
}
</style>
