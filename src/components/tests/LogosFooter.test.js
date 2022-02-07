import React from 'react';
import renderer from 'react-test-renderer';
import LogosFooter from '../LogosFooter';

it('renders correctly', () => {
  const tree = renderer
    .create(<LogosFooter />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
