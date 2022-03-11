import React from 'react';
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';
import SecondNav from '../SecondNav';

it('renders correctly', () => {
  const tree = renderer
      .create(
          <MemoryRouter>
            <SecondNav />
          </MemoryRouter>,
      )
      .toJSON();
  expect(tree).toMatchSnapshot();
});
