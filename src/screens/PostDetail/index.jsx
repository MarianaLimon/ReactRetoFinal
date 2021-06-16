import React, { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router";

// Services
import { getPostDetail, getUserDetail } from "../../services";

import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";

// Images
import imgFlag from "../../images/leftbar/icon-flag.svg";
import imgUnicorn from "../../images/leftbar/icon-unicorn.svg";
import imgDots from "../../images/leftbar/icon-dots.svg";
import imgHeart from "../../images/leftbar/icon-heart.svg";


import Styles from "./index.module.css"

export default function PostDetail() {
  const [data, setData] = useState({});
  const [author, setAuthor] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      const json = await getPostDetail(id);
      setData(json);

      const jsonAuthor = await getUserDetail(json.userId);
      setAuthor(jsonAuthor);
    };
    request();
  }, []);

  const buildTags = (tag, index) => {
    return (
      <React.Fragment key={index}>
        <span className="p-badge font-weight-normal text-size-icon mx-3">
          <a href="#"> {tag} </a>
        </span>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment key={data.id}>
      <Header />
      <div className="container">
        <div className="row justify-content-lg-around m-3">


          <section className={`${Styles.LeftSide} d-none d-md-block col-md-1`}>
            <ul className={`${Styles.MenuInnerPost}`}>
              <li>
                <div><img src={imgHeart} /></div>
                2
              </li>
              <li>
                <div><img src={imgUnicorn} /></div>
                1
              </li>
              <li>
                <div><img src={imgFlag} /></div>
                0
              </li>
              <li>
                <div><img src={imgDots} /></div>
              </li>
            </ul>
          </section>

          <section className={`card col-12 shadow-sm mb-3 px-0 order-md-2 col-md-11 col-lg-8 bg-white ${Styles.PostWrapper}`}>
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
                  src={author.userPic && author.userPic}
                  alt={author.userName && author.userName}
                  className="img-profile rounded-circle mr-2 post-avatar "
                />
                <a className="my-auto text-color-title post-creation mx-3">
                  {author.userName && author.userName}
                  {"  "}
                </a>
              </div>
              <span className="my-3 ">
                {data.creationDate && data.creationDate} ・{" "}
                {data.duration && data.duration} read
              </span>
              <div
                className={`${Styles.Content}`}
                dangerouslySetInnerHTML={{
                  __html: data.content && data.content,
                }}
              ></div>
              <div className="col m-5">
                <button
                  onClick={() => history.push(`/posts/${id}/update`)}
                  className="btn btn-warning"
                >
                  Edit
                </button>
              </div>
            </div>
          </section>

          <aside className="d-none col-12 mb-3 px-0 order-md-3 col-md-11 d-lg-block col-lg-3 px-lg-2">
            <div className={`card shadow-sm rounded mb-3 ${Styles.AuthorWrapper}`}>
              <div className="bg-post-header w-100 pt-6 rounded-top position-relative"></div>
              <div className={`d-flex ${Styles.AuthorHeader}`}>
                <img
                  src={author.userPic && author.userPic}
                  alt={author.userName && author.userName}
                  className="img-profile-2 img-profile  rounded-circle mr-2 perfil-avatar"
                />
                <h4 className="font-weight-bold d-flex align-items-end perfil-name">
                  {author.userName && author.userName}
                </h4>
              </div>
              <div className={`card-body ${Styles.AuthorInfo}`}>
                <p className="text-size-paragraph text-color-card-black perfil-description">
                  {author.description && author.description}
                </p>
                <button className="btn btn-primary w-100 my-2 rounded">
                  Follow {author.userNickname && author.userNickname}
                </button>
                <div className="d-flex flex-column mt-3">
                  <span>
                    Work
                  </span>
                  <p className="text-size-paragraph perfil-work">
                    {author.work && author.work}
                  </p>
                </div>
                <div className="d-flex flex-column">
                  <span>
                    Location
                  </span>
                  <p className="text-size-paragraph perfil-location">
                    {author.location && author.location}
                  </p>
                </div>
              </div>
            </div>

            <div className={`card bg-card shadow-sm ${Styles.MoreFrom}`}>

              <div className={`${Styles.Title}`}>
                <div className="card-body">
                  <h4 className="text-color-title my-2">
                    More from{" "}
                    <a href="#" className="perfil-name">
                      {author.userName && author.userName}
                    </a>
                  </h4> 
                </div>
              </div>
              


              <div className={`${Styles.AllArticles}`}>

                <div className={`${Styles.Article}`}>
                  <div className="card-body">
                    <a href="#" className="text-color-title">
                      Integrate Okta to Node, Express, and VUe
                    </a>
                    <div className={`${Styles.Tags}`}>
                      <span>#webdev</span>
                      <span>#node</span>
                      <span>#vue</span>
                      <span>#tutorial</span>
                    </div>
                  </div>
                </div>

                <div className={`${Styles.Article}`}>
                  <div className="card-body">
                    <a href="#" className="text-color-title">
                      AWS ECR or Docker Hub
                    </a>
                    <div className={`${Styles.Tags}`}>
                      <span>#docker</span>
                      <span>#webdev</span>
                      <span>#tutorial</span>
                      <span>#node</span>
                    </div>
                  </div>
                </div>

                <div className={`${Styles.Article}`}>
                  <div className="card-body">
                    <a href="#" className="text-color-title">
                      Docker, Node, and Vue
                    </a>
                    <div className={`${Styles.Tags}`}>
                      <span>#webdev</span>
                      <span>#docker</span>
                      <span>#vue</span>
                      <span>#tutorial</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>

      <AppLoading />
    </React.Fragment>
  );
}
