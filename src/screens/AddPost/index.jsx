import React, { useState } from "react";

import { useHistory } from "react-router";

import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";
import CustomInput from "../../components/CustomInput";
import CustomTextarea from "../../components/CustomTextarea";

// Services
import { postPost } from "../../services";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  //const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const duration = "5";
      const userId = "123456789";

      const newPost = {
        title,
        content,
        coverUrl,
        tags,
        duration,
        userId,
      };
      await postPost(newPost);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container container-fluid">
        <div className="cont-wrapp row">
          <div
            className="col-12 col-md-8 w-100 bg-white p-3 my-md-4 shadow-sm rounded"
            id="form-wrapper"
          >
            <form
              onSubmit={handleSubmit}
              id="form-new-post"
              className="m-3 p-3 text-muted"
            >
              <h1 className="m-3 p-3 text-muted">Add New Post</h1>
              <div className="form-group col-md-6">
                <CustomTextarea
                  style="new-post-title"
                  id="textarea"
                  placeholder="New post title here..."
                  value={title}
                  callback={setTitle}
                />
              </div>
              <div className="form-group col-md-6">
                <CustomTextarea
                  style="input-add-post"
                  id="tags"
                  placeholder="Add up to 4 tags..."
                  value={tags}
                  callback={setTags}
                  validate={tags}
                />
              </div>

              <div className="form-group col-md-6">
                <CustomTextarea
                  style="input-add-post"
                  id="Image"
                  placeholder="Add cover image URL here..."
                  value={coverUrl}
                  callback={setCoverUrl}
                />
              </div>
              <div className="form-group col-md-6">
                <CustomTextarea
                  style="input-add-post"
                  id="Description"
                  placeholder="Write your post content here"
                  value={content}
                  callback={setContent}
                />
              </div>

              <button className="btn btn-primary mt-2" type="submit">
                Publish
              </button>
            </form>
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
