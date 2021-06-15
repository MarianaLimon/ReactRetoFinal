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

          <div>
            <Post />
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
import Styles from "./index.module.css";

export default function Content(props) {
  const history = useHistory();

  const buildPosts = (
    [
      key,
      {
        _id: id,
        content,
        coverUrl,
        creationDate,
        duration,
        likes,
        tags,
        title,
        userId,
      },
    ],
    index
  ) => {
    return (
      <React.Fragment key={index}>
        <Post
          id={id}
          content={content}
          coverUrl={coverUrl}
          creationDate={creationDate}
          duration={duration}
          likes={likes}
          tags={tags}
          title={title}
          userId={userId}
        />
      </React.Fragment>
    );
  };

  return <section>{props.data.reverse().map(buildPosts)}</section>;
}
