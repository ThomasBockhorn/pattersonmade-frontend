import { mount } from '@vue/test-utils';
import TestimonialsSection from '../../../components/portfolio/TestimonialsSection.vue';
import { describe, expect, it } from 'vitest';

describe('TestimonialsSection', () => {
  it('renders the testimonials section title and description', () => {
    const wrapper = mount(TestimonialsSection);
    expect(wrapper.text()).toContain('Client Testimonials');
    expect(wrapper.text()).toContain('transformed our online presence');
  });
  it('renders all testimonial names', () => {
    const wrapper = mount(TestimonialsSection);
    expect(wrapper.text()).toContain('Jane Doe');
    expect(wrapper.text()).toContain('John Smith');
    expect(wrapper.text()).toContain('Name Surname');
  });
});
