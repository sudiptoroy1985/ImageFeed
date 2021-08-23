import React from "react";
import Card from "./../components/card";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
const renderCard = () => shallow(<Card />);

afterEach(() => {});

test("initial Card is rendered as expected", () => {
  const card = renderCard();
  expect(card).toBeTruthy();
});

test("Card title is rendered as expected", () => {
  const card = renderCard();
  const lastEditedDate = new Date().toLocaleDateString();
  card.setProps({
    name: "testname",
    image: "",
    description: "test description",
    dateLastEdited: lastEditedDate
  });
  const cardTitle = card.find(".card__title");
  expect(cardTitle.children().length).toBe(2);
  expect(cardTitle.childAt(0).getElement().props.children).toBe("testname");
  expect(cardTitle.childAt(1).getElement().props.children).toBe(lastEditedDate);
  const cardDescription = card.find(".card__description");
  expect(cardDescription.children().length).toBe(1);
  expect(cardDescription.childAt(0).getElement().props.children).toBe("test description");
});
