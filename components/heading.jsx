import React from "react";

function Heading() {
  const date = new Date();
  const time = date.getHours();
  var headline = "good morning";
  if (time > 20) {
    headline = "Good Night";
  } else if (time > 16) {
    headline = "Good Evening";
  } else if (time > 12) {
    headline = "Good Aftenoon";
  }
  return (
    <div>
      <h1>{headline}</h1>
    </div>
  );
}
export default Heading;
