import axios from "axios";
import React, { useState } from "react";

export default () => {
  const [textMotion, setMotion] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(``, {
        textMotion,
      })
      .catch((err) => {
        console.log(err.message);
      });

    setMotion("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="text-motion">
          <input
            value={textMotion}
            onChange={(e) => setMotion(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Magic!</button>
      </form>
    </div>
  );
};
