import React from "react";

function Button({ tag, logo, handelerFunc }) {
  return (
    <>
      <button className={tag + " btn"} onClick={handelerFunc}>
        {logo}
      </button>
    </>
  );
}

export default Button;
