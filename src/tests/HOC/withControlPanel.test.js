import React from "react";
import WithControlPanel from "./../../components/HOC/withControlPanel";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
const template = () => <div>any content</div>;
const ContentWithControls = WithControlPanel(template);
const wrappedComponent = shallow(<ContentWithControls />);

afterEach(() => {});

test("initial HOC is rendered with control panel", () => {
  const controlPanel = wrappedComponent.find(".control__panel");
  const controls = controlPanel.children();
  expect(controls.length).toBe(2);
  expect(controls.children().length).toBe(2);
});

test("initial HOC is rendered with passed Component", () => {
  const templateToRender = wrappedComponent.find("template");
  expect(templateToRender).toBeTruthy();
});
