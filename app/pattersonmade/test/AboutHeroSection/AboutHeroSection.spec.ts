import { mount } from '@vue/test-utils';
import AboutHeroSection from '../../components/about/AboutHeroSection.vue';
import { describe, expect, it } from 'vitest';

describe('AboutHeroSection', () => {
  it('renders the hero title and description', () => {
    const wrapper = mount(AboutHeroSection);
    expect(wrapper.text()).toContain('Crafted with Heart');
    expect(wrapper.text()).toContain('we create websites that reflect your unique identity');
  });
});
