import { mount } from '@vue/test-utils';
import PortfolioHeader from '../../../components/portfolio/PortfolioHeader.vue';
import { describe, expect, it } from 'vitest';

describe('PortfolioHeader', () => {
  it('renders the main title and description', () => {
    const wrapper = mount(PortfolioHeader);
    expect(wrapper.text()).toContain('Creative Web Solutions');
    expect(wrapper.text()).toContain('diverse portfolio showcasing unique projects');
  });
  it('renders all tags', () => {
    const wrapper = mount(PortfolioHeader);
    expect(wrapper.text()).toContain('Web Design');
    expect(wrapper.text()).toContain('E-commerce');
    expect(wrapper.text()).toContain('Brand Identity');
  });
});
