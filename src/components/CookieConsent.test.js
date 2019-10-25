import React from 'react';
import { shallow } from 'enzyme';

import CookieConsent, { isCookieAccepted } from './CookieConsent';

describe('isCookieAccepted', () => {
  beforeEach(() => {
    document.cookie = 'cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  });

  it('returns true if cookie exists', () => {
    document.cookie = `cookieConsent=true`;

    expect(isCookieAccepted()).toBe(true);
  });

  it('returns false if cookie does not exist', () => {
    expect(isCookieAccepted()).toBe(false);
  });
});

describe('<CookieConsent />', () => {
  beforeEach(() => {
    document.cookie = 'cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  });

  it('returns null if user already accepted cookies', () => {
    document.cookie = 'cookieConsent=true';
    const wrapper = shallow(<CookieConsent />);

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<CookieConsent />);

    expect(wrapper).toMatchSnapshot();
  });
});
