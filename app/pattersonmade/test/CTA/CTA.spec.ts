import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CTA from '../../components/CTA.vue';

describe('CTA', () => {
  it('renders the CTA title', () => {
    const wrapper = mount(CTA);
    expect(wrapper.html()).toContain("Let's Build Your Dream Website");
  });
});
