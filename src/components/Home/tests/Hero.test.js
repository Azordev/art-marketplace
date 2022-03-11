import React from 'react';
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';
import Hero from '../Hero';

it('renders correctly', () => {
  const tree = renderer
      .create(
          <MemoryRouter>
            <Hero />
          </MemoryRouter>,
      )
      .toJSON();
  expect(tree).toMatchSnapshot();
});
