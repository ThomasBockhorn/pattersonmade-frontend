import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HeroSection from '../../components/main/HeroSection.vue';

describe('HeroSection', () => {
  it('renders the hero title', () => {
    const wrapper = mount(HeroSection);
    expect(wrapper.html()).toContain('PattersonMade Web Developer Studio');
  });
});
