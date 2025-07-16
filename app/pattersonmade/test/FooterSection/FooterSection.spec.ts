import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FooterSection from '../../components/FooterSection.vue';

describe('FooterSection', () => {
  it('renders the Quick Links title', () => {
    const wrapper = mount(FooterSection);
    expect(wrapper.html()).toContain('Quick Links');
  });
  it('renders the copyright', () => {
    const wrapper = mount(FooterSection);
    expect(wrapper.html()).toContain('© 2025 PattersonMade. All rights reserved.');
  });
});
