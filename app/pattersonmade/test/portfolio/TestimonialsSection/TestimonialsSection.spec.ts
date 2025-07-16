import { mount } from '@vue/test-utils';
import TestimonialsSection from '../../../components/TestimonialSection.vue';
import { describe, expect, it } from 'vitest';

describe('TestimonialsSection', () => {
  it('renders the testimonials section title and description', () => {
    const wrapper = mount(TestimonialsSection);
    expect(wrapper.text()).toContain('Client Testimonials');
  });
  it('renders all testimonial names', () => {
    const wrapper = mount(TestimonialsSection);
    expect(wrapper.text()).toContain('Emily Johnson');
    expect(wrapper.text()).toContain('Michael Smith');
    expect(wrapper.text()).toContain('Sarah Lee');
  });
});
