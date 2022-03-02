import React from "react";
import renderer from "react-test-renderer";
import HomeSlider from "../HomeSlider";

it("renders correctly", () => {
  const tree = renderer.create(<HomeSlider />).toJSON();
  expect(tree).toMatchSnapshot();
});
