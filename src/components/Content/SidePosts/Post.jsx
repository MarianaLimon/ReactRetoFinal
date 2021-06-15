import React, { useEffect, useState } from "react";

import Styles from "./Post.module.css";

// Rutas imagenes
import imgArticleImg from "../../../images/photo-main.jpeg";

import profile1 from "../../../images/profiles/user2.webp";
import profile2 from "../../../images/profiles/user3.webp";
import profile3 from "../../../images/profiles/user4.webp";

import imgReactions from "../../../images/reaction-heart.svg";
import imgComments from "../../../images/reaction-comment.svg";

export default function Post(props) {
  return (
    <React.Fragment>
      <div key={props.id} className={`card ${Styles.AppCard}`}>
        <div className="card-body p-0">
          <li className={`card mb-0 ${Styles.CardContainer}`}>
            {/* Imagen del Post */}
            <div className={`${Styles.ArticleImg}`}>
              <img className={`w-2`} src={`${props.coverUrl}`} />
            </div>
            {/* Card Info */}
            <div className={`${Styles.CardInfo}`}>
              {/* Author */}
              <div className={`${Styles.autor}`}>
                <img
                  className={`rounded-circle border border-secondary ${Styles.profile}`}
                  src={props.coverUrl}
                />
                <div className={`${Styles.autorName}`}>
                  <div>{props.userId}</div>
                  <div>{props.creationDate}</div>
                </div>
              </div>
              {/* Title */}
              <div>
                <h2 className={`${Styles.cardTitle}`}>
                  <a href={`./posts/${props.id}`}>{props.title}</a>
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
                    <span>{props.likes}</span>
                    <span className="react-text"> &nbsp;reactions</span>
                  </a>
                  <a href="#">
                    <img src={imgComments} />
                    <span>{props.likes}</span>
                    <span className="react-text"> &nbsp;comments</span>
                  </a>
                </div>
                <div className="react-right">
                  <span>{props.duration} min read</span>
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
}
