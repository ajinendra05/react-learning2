import "./middle.css";
import ItemBox from "./ItemBox";
import componentsImage from "../assets/Images/components.png";
import stateImage from "../assets/Images/state.png";
import eventsImage from "../assets/Images/events.png";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

const MiddleItem = () => {
  return (
    <div className="middle">
      <ItemBox obj={concepts[0]}></ItemBox>
      <ItemBox obj={concepts[1]}></ItemBox>
      <ItemBox obj={concepts[2]}></ItemBox>
    </div>
  );
};

export default MiddleItem;
