import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import StandardTierSection from '../../../components/services/StandardTierSection.vue';

describe('StandardTierSection', () => {
  it('renders the StandardTierSection component', () => {
    const wrapper = mount(StandardTierSection);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text().toLowerCase()).toContain('standard');
  });
});
