import { mount } from '@vue/test-utils';
import CraftedWithCareSection from '../../components/about/CraftedWithCareSection.vue';
import { describe, expect, it } from 'vitest';

describe('CraftedWithCareSection', () => {
  it('renders the crafted with care title and description', () => {
    const wrapper = mount(CraftedWithCareSection);
    expect(wrapper.text()).toContain('Crafted With Care: Get to Know the Developer Behind PattersonMade');
    expect(wrapper.text()).toContain('custom web designer and web developer');
  });
});
