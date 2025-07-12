import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import MiniatureTierSection from '~/components/services/MiniatureTierSection.vue';

describe('MiniatureTierSection', () => {
  it('renders the MiniatureTierSection component', () => {
    const wrapper = mount(MiniatureTierSection);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text().toLowerCase()).toContain('miniature');
  });
});
