import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Navbar from '../../components/Navbar.vue';

describe('Navbar', () => {
  it('renders the logo', () => {
    const wrapper = mount(Navbar, {
      global: {
        stubs: { NuxtLink: { template: '<a><slot /></a>' } }
      }
    });
    expect(wrapper.html()).toContain('PattersonMade');
  });
  it('renders the Home Page link', () => {
    const wrapper = mount(Navbar, {
      global: {
        stubs: { NuxtLink: { template: '<a><slot /></a>' } }
      }
    });
    expect(wrapper.html()).toContain('Home');
  });
});
