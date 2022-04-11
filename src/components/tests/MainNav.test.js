import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import MainNav from '../MainNav';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <MainNav />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
