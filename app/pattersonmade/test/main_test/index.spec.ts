import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import IndexPage from '../../pages/index.vue';

describe('Index Page', () => {
  it('renders the HeroSection', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.html()).toContain('PattersonMade Web Developer Studio');
  });

  it('renders the WhyChoosePattersonSection', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.html()).toContain('Why Choose PattersonMade for Your Website?');
  });

  it('renders the TrustYourVisionSection', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.html()).toContain('Transform Your Vision into Reality');
  });

  it('renders the CTA', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.html()).toContain("Let's Build Your Dream Website");
  });

  it('renders the TestimonialSection', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.html()).toContain('Client Testimonials');
  });

  it('renders the ExploreThreeTiersSection', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.html()).toContain('Explore Our Three Tiers of Tailored Web Solutions and Services');
  });

  it('renders the TurnYourVisionSection', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.html()).toContain('Turn your vision into reality');
  });
});
