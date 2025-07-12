import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ToyTierSection from '~/components/services/ToyTierSection.vue';

describe('ToyTierSection', () => {
  it('renders the ToyTierSection component', () => {
    const wrapper = mount(ToyTierSection);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text().toLowerCase()).toContain('toy');
  });
});
