<template>
  <div class="why-choose-section" style="align-self: stretch; padding-left: 64px; padding-right: 64px; padding-top: 112px; padding-bottom: 112px; background: var(--Color-Scheme-1-Background, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 80px; display: flex">
    <div class="why-choose-section-inner" style="width: 100%; max-width: 1280px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 80px; display: flex">
      <div class="why-choose-flex" style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 80px; display: inline-flex">
        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: inline-flex">
          <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
              <div style="justify-content: flex-start; align-items: center; display: inline-flex">
                <div style="color: var(--Color-Scheme-1-Text, #010605); font-size: 16px; font-family: Source Sans 3; font-weight: 600; line-height: 24px; word-wrap: break-word">Trust</div>
              </div>
              <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
                <div class="why-choose-title" style="align-self: stretch; color: var(--Color-Scheme-1-Text, #010605); font-size: 48px; font-family: Encode Sans; font-weight: 400; line-height: 57.60px; word-wrap: break-word">Why Choose PattersonMade for Your Website?</div>
                <div style="align-self: stretch; color: var(--Color-Scheme-1-Text, #010605); font-size: 18px; font-family: Source Sans 3; font-weight: 400; line-height: 27px; word-wrap: break-word">I prioritize your vision and goals with a personalized approach, ensuring your online presence truly represents your identity and creative vision through expert website design and development.</div>
              </div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
              <div style="align-self: stretch; padding-top: 8px; padding-bottom: 8px; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                  <div style="align-self: stretch; color: var(--Color-Scheme-1-Text, #010605); font-size: 20px; font-family: Encode Sans; font-weight: 400; line-height: 28px; word-wrap: break-word">Crafted with Care and Personal Attention</div>
                  <div style="align-self: stretch; color: var(--Color-Scheme-1-Text, #010605); font-size: 16px; font-family: Source Sans 3; font-weight: 400; line-height: 24px; word-wrap: break-word">I take the time to understand your unique business needs to deliver a custom website that truly represents your brand.</div>
                </div>
                <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                  <div style="align-self: stretch; color: var(--Color-Scheme-1-Text, #010605); font-size: 20px; font-family: Encode Sans; font-weight: 400; line-height: 28px; word-wrap: break-word">Simplify Your Digital Journey with One-on-One Support</div>
                  <div style="align-self: stretch; color: var(--Color-Scheme-1-Text, #010605); font-size: 16px; font-family: Source Sans 3; font-weight: 400; line-height: 24px; word-wrap: break-word">I also provide ongoing support and updates to keep your site secure, up-to-date, and performing at its best. Thorough previews and testing ensure your site looks and functions perfectly before publish. Plus, I make it easy for you to edit and manage new content as your business grows.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img class="why-choose-img" style="flex: 1 1 0; height: 400px; border-radius: 40px" src="/public/img/computerdesk.jpg" alt="An image of a computer on a desk"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this static section
</script>

<style scoped>
/* Responsive styles for WhyChoosePattersonSection */
@media (max-width: 1024px) {
  :deep(.why-choose-section) {
    padding-left: 32px !important;
    padding-right: 32px !important;
    padding-top: 64px !important;
    padding-bottom: 64px !important;
    gap: 40px !important;
  }
  :deep(.why-choose-section-inner) {
    gap: 40px !important;
  }
  :deep(.why-choose-flex) {
    gap: 40px !important;
  }
  :deep(.why-choose-img) {
    height: 400px !important;
    border-radius: 24px !important;
  }
  :deep(.why-choose-title) {
    font-size: 32px !important;
    line-height: 40px !important;
  }
}

@media (max-width: 700px) {
  :deep(.why-choose-section) {
    padding-left: 16px !important;
    padding-right: 16px !important;
    padding-top: 32px !important;
    padding-bottom: 32px !important;
    gap: 24px !important;
  }
  :deep(.why-choose-section-inner) {
    gap: 24px !important;
  }
  :deep(.why-choose-flex) {
    flex-direction: column !important;
    gap: 24px !important;
    align-items: stretch !important;
  }
  :deep(.why-choose-img) {
    width: 100% !important;
    height: 240px !important;
    border-radius: 16px !important;
    object-fit: cover !important;
  }
  :deep(.why-choose-title) {
    font-size: 22px !important;
    line-height: 28px !important;
  }
}
</style>
