import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TestimonialSection from '../../components/main/TestimonialSection.vue';

describe('TestimonialSection', () => {
  it('renders the testimonials title', () => {
    const wrapper = mount(TestimonialSection);
    expect(wrapper.html()).toContain('Client Testimonials');
  });
});
