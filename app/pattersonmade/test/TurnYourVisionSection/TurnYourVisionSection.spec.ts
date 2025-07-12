import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TurnYourVisionSection from '../../components/main/TurnYourVisionSection.vue';

describe('TurnYourVisionSection', () => {
  it('renders the section title', () => {
    const wrapper = mount(TurnYourVisionSection);
    expect(wrapper.html()).toContain('Turn your vision into reality');
  });
});
