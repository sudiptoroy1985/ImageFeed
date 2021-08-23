import React from "react";
import { Tabular } from "./../components/tabular";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

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
configure({ adapter: new Adapter() });
const renderTabular = () => shallow(<Tabular data={mock} />);

afterEach(() => {});

test("initial Table is rendered as expected", () => {
  const table = renderTabular();
  expect(table).toBeTruthy();
});

test("Table is rendered with 2 rows as expected with mock data", () => {
  const table = renderTabular();
  const tbody = table.find("tbody");
  expect(tbody.children().length).toBe(2);
  const firstRow = tbody.children().first();
  expect(firstRow.children().length).toBe(3);
});

test("No records data renders with empty dataset", () => {
    const table = renderTabular();
    table.setProps({ data: [] });
    expect(table.find(".no__records").length).toBe(1);
});
