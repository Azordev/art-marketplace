import React from "react";
import { MemoryRouter } from "react-router";
import renderer from "react-test-renderer";
import ObjectList from "../ObjectList";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <ObjectList title="test" seeMore="#" items={[]} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
