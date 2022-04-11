import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
