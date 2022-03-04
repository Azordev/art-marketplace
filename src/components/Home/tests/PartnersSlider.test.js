import React from "react";
import renderer from "react-test-renderer";
import PartnersSlider from "../PartnersSlider";

it("renders correctly", () => {
  const tree = renderer.create(<PartnersSlider />).toJSON();
  expect(tree).toMatchSnapshot();
});
