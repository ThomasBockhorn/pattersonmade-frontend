import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ExploreThreeTiersSection from '../../components/main/ExploreThreeTiersSection.vue';

describe('ExploreThreeTiersSection', () => {
  it('renders the tiers title', () => {
    const wrapper = mount(ExploreThreeTiersSection);
    expect(wrapper.html()).toContain('Explore Our Three Tiers of Tailored Web Solutions and Services');
  });
});
