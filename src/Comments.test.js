import React from "react";
import App from "./App";

import { shallow, mount, render } from "enzyme";

import Comments from "./Comments";

describe("<Comments />", () => {
  const comments = {
    1: { comment: "comment 1" },
    2: { comment: "comment 2" }
  };
  it("renders without crashing", () => {
    const wrapper = shallow(<Comments comments={comments} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.is(".row")).toBe(true);
    expect(wrapper.find("Comment").length).toBe(2);
  });
});
