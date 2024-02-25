import "./ExpanseDate.css";
import Card from "../UI/card";

const DateItem = function({ date }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.toLocaleString("en-US", { year: "numeric" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <Card className="date-item">
      <div className="month">{month} </div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </Card>
  );
}

export default DateItem;
