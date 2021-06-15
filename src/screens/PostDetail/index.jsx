import React, { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router";

// Services
import { getPostDetail } from "../../services";

import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";

export default function PostDetail() {
  const [data, setData] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      const json = await getPostDetail(id);
      setData(json);
    };
    request();
  }, []);

  const buildTags = (tag, index) => {
    return (
      <React.Fragment key={index}>
        <span className="mr-2 p-badge font-weight-normal text-size-icon mr-3">
          {tag}{" "}
        </span>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment key={id}>
      <Header />
      <div className="container">
        <div className="row justify-content-lg-around m-3">
          <div className="bg-card col-12 shadow-sm mb-3 px-0 order-md-2 col-md-11 col-lg-8 post-wrapper bg-white">
            <img
              alt={data.title && data.title}
              src={data.coverUrl && data.coverUrl}
              className="w-100 rounded-top post-cover-img"
            />
            <div className="d-flex flex-column px-3 py-2 px-md-3 p-lg-5">
              <h1 className="font-weight-bold mb-3 post-title">
                {data.title && data.title}
              </h1>

              <div className="d-flex flex-row w-100 mb-3 post-tags">
                {data.tags && data.tags.map(buildTags)}
              </div>
              <div className="d-flex flex-row mb-3">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--iYP2n_-7--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/559048/24a84e12-3373-43e0-90c4-bcaee2a12dcf.jpg"
                  alt="profile-pic-kevin"
                  className="img-profile rounded-circle mr-2 post-avatar"
                />
                <a className="my-auto text-color-title post-creation">
                  Kevin Odongo{" "}
                  <span className="ml-3 ">Mar 6 ・ 4 min read</span>
                </a>
              </div>
              <div className="content">{data.content && data.content}</div>
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
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
