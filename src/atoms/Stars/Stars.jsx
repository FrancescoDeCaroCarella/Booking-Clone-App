import React from "react";

function Stars({ number = 0 }) {
  const parsedNum = parseInt(number);
  if (parsedNum < 0 || parsedNum > 5 || Number.isNaN(parsedNum)) {
    console.log(number, parsedNum);
    return <span>voglio un numero</span>;
  }
  let str = "";
  let starStr = "⭐";
  for (let i = 0; i < parsedNum; i++) {
    str += starStr;
  }
  return <span className="">{str}</span>;
}

export default Stars;
