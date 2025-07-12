import { mount } from '@vue/test-utils';
import PortfolioSection from '../../../components/portfolio/PortfolioSection.vue';
import { describe, expect, it } from 'vitest';

describe('PortfolioSection', () => {
  it('renders the section title and description', () => {
    const wrapper = mount(PortfolioSection);
    expect(wrapper.text()).toContain('Our Creative Showcase');
    expect(wrapper.text()).toContain('diverse range of projects');
  });
  it('renders all project cards', () => {
    const wrapper = mount(PortfolioSection);
    expect(wrapper.text()).toContain('Artistic Web Design');
    expect(wrapper.text()).toContain('E-Commerce Excellence');
    expect(wrapper.text()).toContain('Project name here');
  });
});
