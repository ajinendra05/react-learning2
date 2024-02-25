import "./itemBox.css";

const ItemBox = (props) => {
  const obj = props.obj;
  const imgSrc = obj.image;
  const heading = obj.title;
  const bodytext = obj.description;
  return (
    <div className="box">
      <img src={imgSrc} className="boxImg"></img>
      <h2 className="boxTitle"> {heading}</h2>
      <p className="boxContent">{bodytext}</p>
    </div>
  );
};

export default ItemBox;
