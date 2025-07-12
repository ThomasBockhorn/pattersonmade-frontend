import { mount } from '@vue/test-utils';
import HeartFeltJourneySection from '../../components/about/HeartFeltJourneySection.vue';
import { describe, expect, it } from 'vitest';

describe('HeartFeltJourneySection', () => {
  it('renders the heartfelt journey title and description', () => {
    const wrapper = mount(HeartFeltJourneySection);
    expect(wrapper.text()).toContain('The Heartfelt Journey of PattersonMade');
    expect(wrapper.text()).toContain('PattersonMade was born from a deep passion');
  });
});
