import { mount } from '@vue/test-utils';
import DedicatedSection from '../../components/about/DedicatedSection.vue';
import { describe, expect, it } from 'vitest';

describe('DedicatedSection', () => {
  it('renders the dedicated section title and description', () => {
    const wrapper = mount(DedicatedSection);
    expect(wrapper.text()).toContain('Dedicated to Your Unique Online Presence');
    expect(wrapper.text()).toContain('every website should reflect the distinct individuality');
  });
});
