import React, { useState } from "react";

import { useHistory } from "react-router";

import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";
import CustomInput from "../../components/CustomInput";
import CustomTextarea from "../../components/Header/CustomTextarea";

// Services
import { postPost } from "../../services";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newPost = {
        title,
        description,
        image,
        author,
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
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="form-group col-md-6">
                <CustomTextarea
                  id="textarea"
                  placeholder="New post title here..."
                  value={title}
                  callback={setTitle}
                />
                <CustomInput
                  id="Title"
                  placeholder="Title"
                  value={title}
                  callback={setTitle}
                />
              </div>
              <div className="form-group col-md-6">
                <CustomInput
                  id="Description"
                  placeholder="Description"
                  value={description}
                  callback={setDescription}
                />
              </div>
              <div className="form-group col-md-6">
                <CustomInput
                  id="Author"
                  placeholder="Author"
                  value={author}
                  callback={setAuthor}
                />
              </div>

              <div className="form-group col-md-6">
                <CustomInput
                  id="Image"
                  placeholder="Image"
                  value={image}
                  callback={setImage}
                />
              </div>

              <button className="btn btn-primary mt-2" type="submit">
                Crear Post
              </button>
            </form>
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
