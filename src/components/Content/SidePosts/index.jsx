/*import React from "react";

import Post from "./Post";
import Styles from "./index.module.css";

// Rutas imagenes
// import image from "../../images/photo-main.jpeg";

// import imgReactions from "../../images/reaction-heart.svg";
// import imgComments from "../../images/reaction-comment.svg";

// import profile1 from "../../images/profiles/user2.webp";
// import profile2 from "../../images/profiles/user3.webp";

class Content extends React.Component {
  render() {
    return (
      <section>
        <div className={`card ${Styles.AppCard}`}>
          <div className="card-body">
            <Post />
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
*/

import React from "react";

import { useHistory } from "react-router";

import Post from "./Post";
import Styles1 from "./index.module.css";

import Styles from "./Post.module.css";

// Rutas imagenes
import imgArticleImg from "../../../images/photo-main.jpeg";

import profile1 from "../../../images/profiles/user2.webp";
import profile2 from "../../../images/profiles/user3.webp";
import profile3 from "../../../images/profiles/user4.webp";

import imgReactions from "../../../images/reaction-heart.svg";
import imgComments from "../../../images/reaction-comment.svg";

export default function Content(props) {
  const history = useHistory();
  console.log(props.data);
  const buildPosts = ([
    key,
    { content, coverUrl, creationDate, duration, likes, tags, title, userId },
  ]) => {
    return (
      <React.Fragment>
        <div key={key} className={`card ${Styles.AppCard}`}>
          <div className="card-body">
            <li className={`card ${Styles.CardContainer}`}>
              {/* Imagen del Post */}
              <div className={`${Styles.ArticleImg}`}>
                <img className={`w-2`} src={`${coverUrl}`} />
              </div>
              {/* Card Info */}
              <div className={`${Styles.CardInfo}`}>
                {/* Author */}
                <div className={`${Styles.autor}`}>
                  <img
                    className={`rounded-circle border border-secondary ${Styles.profile}`}
                    src={coverUrl}
                  />
                  <div className={`${Styles.autorName}`}>
                    <div>{userId}</div>
                    <div>{creationDate}</div>
                  </div>
                </div>
                {/* Title */}
                <div>
                  <h2 className={`${Styles.cardTitle}`}>
                    <a href="./">{title}</a>
                  </h2>
                </div>
                {/* Tags */}
                <div className={`${Styles.tags}`}>
                  <a href="#">
                    <span>#</span>beginners
                  </a>
                  <a href="#">
                    <span>#</span>productivity
                  </a>
                  <a href="#">
                    <span>#</span>javascript
                  </a>
                  <a href="#">
                    <span>#</span>webdev
                  </a>
                </div>
                {/* Reactions */}
                <div className={`${Styles.reactions}`}>
                  <div className={`${Styles.reactLeft}`}>
                    <a href="#">
                      <img src={`${imgReactions}`} />
                      <span>{likes}</span>
                      <span className="react-text"> &nbsp;reactions</span>
                    </a>
                    <a href="#">
                      <img src={imgComments} />
                      <span>{likes}</span>
                      <span className="react-text"> &nbsp;comments</span>
                    </a>
                  </div>
                  <div className="react-right">
                    <span>{duration} min read</span>
                    <button>Save</button>
                  </div>
                </div>{" "}
                {/* End Reactions */}
              </div>{" "}
              {/* End Card Info */}
            </li>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return <section>{props.data.reverse().map(buildPosts)}</section>;
}
