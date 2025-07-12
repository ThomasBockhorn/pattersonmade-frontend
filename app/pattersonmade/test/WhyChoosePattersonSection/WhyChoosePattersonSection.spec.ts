import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import WhyChoosePattersonSection from '../../components/main/WhyChoosePattersonSection.vue';

describe('WhyChoosePattersonSection', () => {
  it('renders the section title', () => {
    const wrapper = mount(WhyChoosePattersonSection);
    expect(wrapper.html()).toContain('Why Choose PattersonMade for Your Website?');
  });
});
