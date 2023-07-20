import React from "react";
import Helper from "./Helper";
export default function SimpleBlock({ helper = "", heading = "", content }) {
  return (
    <>
      <div className="header">{heading}</div>
      {helper !== "" && <Helper text={helper} />}
      <div className="basic-content">{content}</div>
    </>
  );
}
