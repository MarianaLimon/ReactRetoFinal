import React from "react";

export default function CustomTextarea(props) {
  return (
    <React.Fragment>
      <textarea
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.callback(event.target.value)}
      />
    </React.Fragment>
  );
}
