import React from "react";
import renderer from "react-test-renderer";
import AuthInput from "../AuthInput";

it("renders correctly", () => {
  const tree = renderer
    .create(<AuthInput type="text" name="test" placeholder="test" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
