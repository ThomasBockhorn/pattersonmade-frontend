import { mount } from '@vue/test-utils';
import CTA2 from '../../components/CTA2.vue';
import { describe, expect, it } from 'vitest';

describe('CTA2', () => {
  it('renders the CTA title and description', () => {
    const wrapper = mount(CTA2);
    expect(wrapper.text()).toContain('Let’s Create Something Amazing');
    expect(wrapper.text()).toContain('Have questions or want to discuss your project?');
  });
  it('renders the Contact button', () => {
    const wrapper = mount(CTA2);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').text()).toContain('Contact');
  });
});
