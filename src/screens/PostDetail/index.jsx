import React, { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router";

import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";

export default function PostDetail() {
  const [data, setData] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://react-11g-default-rtdb.firebaseio.com/posts/${id}.json`)
      .then((response) => response.json())
      .then((json) => setData(json));
  });

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col m-5">
            <h1>{data.title && data.title}</h1>
            <img
              alt={data.title && data.title}
              src={data.image && data.image}
              style={{
                width: "400px",
              }}
            />
            <p>{data.description && data.description}</p>

            <p>
              Author: <strong>{data.author}</strong>
            </p>
          </div>
          <div className="col m-5">
            <button
              onClick={() => history.push(`/posts/${id}/update`)}
              className="btn btn-warning"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
