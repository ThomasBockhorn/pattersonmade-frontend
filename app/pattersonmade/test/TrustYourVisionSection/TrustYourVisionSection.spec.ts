import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TrustYourVisionSection from '../../components/main/TrustYourVisionSection.vue';

describe('TrustYourVisionSection', () => {
  it('renders the section title', () => {
    const wrapper = mount(TrustYourVisionSection);
    expect(wrapper.html()).toContain('Transform Your Vision into Reality');
  });
});
