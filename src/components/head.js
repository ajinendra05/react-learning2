import "./head.css";
import keyConceptimg from "../assets/Images/key-concepts.png";

const headComponent = () => {
  return (
    <div>
      <img src={keyConceptimg} className="keyConceptImg"></img>
      <h2 className="title">Key React Concepts</h2>
      <p className="discription">
        Selected key React concepts you should know about
      </p>
    </div>
  );
};

export default headComponent;
