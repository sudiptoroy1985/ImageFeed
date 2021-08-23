import React from "react";
import { Content } from "./../components/content";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";

configure({ adapter: new Adapter() });
const shallowRenderContent = () => shallow(<Content />);
const mountContent = data => mount(<Content data={data} />);
const mock = [
  {
    name: "Customer Assurance Liaison",
    image: "http://lorempixel.com/320/220/",
    description:
      "Vel voluptatem id repudiandae aut omnis. Deleniti tempore aliquam quia magnam eos. Sunt saepe nisi delectus.",
    dateLastEdited: "2018-05-19T12:33:25.545Z"
  },
  {
    name: "Dynamic Infrastructure Designer",
    image: "http://lorempixel.com/320/220/",
    description:
      "Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim. Ducimus ea soluta esse modi quia.",
    dateLastEdited: "2017-11-28T04:59:13.759Z"
  }
];

afterEach(() => {});

test("initial Content is rendered as expected", () => {
  const content = shallowRenderContent();
  expect(content).toBeTruthy();
});

test("No cards to be rendered under content when data is unavailable", () => {
  const content = mountContent([]);
  const feed = content.find(".feed");
  const cards = feed.children();
  expect(cards.length).toBe(0);
});

test("cards to be rendered under content when data is available", () => {
  const content = mountContent(mock);
  const feed = content.find(".feed");
  const cards = feed.children();
  expect(cards.length).toBe(2);
});
