// import React from "react";
import React, { useEffect, useState } from "react";

import { useHistory } from "react-router";

import AppLoading from "../../components/AppLoading";
import Header from "../../components/Header";
import Content from "../../components/Content/SideBarLeft";
import Posts from "../../components/Content/SidePosts";
import AsideCards from "../../components/Content/SideBarRight";

// Services
import { getPosts } from "../../services";

export default function Home() {
  const [data, setData] = useState({});

  const history = useHistory();

  useEffect(() => {
    const request = async () => {
      const json = await getPosts();
      setData(json);
    };
    request();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Content />
          </div>
          <div className="col-md-6 my-3">
            <Posts
              data={Object.entries(data).length ? Object.entries(data) : []}
            />
            <div className="col">
              <button
                onClick={() => history.push("/createPost")}
                className="btn btn-primary"
              >
                Add Post
              </button>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <AsideCards />
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
