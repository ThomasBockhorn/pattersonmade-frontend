import { mount } from '@vue/test-utils';
import BlogSection from '../../components/blog/BlogSection.vue';
import { describe, expect, it } from 'vitest';

describe('BlogSection', () => {
  it('renders the blog main title and description', () => {
    const wrapper = mount(BlogSection);
    expect(wrapper.text()).toContain('Explore Our Latest Insights');
    expect(wrapper.text()).toContain('Discover tips, trends, and stories from our community.');
  });
  it('renders all blog categories', () => {
    const wrapper = mount(BlogSection);
    expect(wrapper.text()).toContain('View all');
    expect(wrapper.text()).toContain('Web Development');
    expect(wrapper.text()).toContain('Digital Marketing');
    expect(wrapper.text()).toContain('Client Stories');
    expect(wrapper.text()).toContain('Industry Insights');
  });
  it('renders at least one blog card', () => {
    const wrapper = mount(BlogSection);
    expect(wrapper.text()).toContain('Crafting Websites with Heart');
    expect(wrapper.text()).toContain('Read more');
  });
});
