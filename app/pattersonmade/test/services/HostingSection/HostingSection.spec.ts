import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import HostingSection from '~/components/services/HostingSection.vue';

describe('HostingSection', () => {
  it('renders the HostingSection component', () => {
    const wrapper = mount(HostingSection);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text().toLowerCase()).toContain('hosting');
  });
});
