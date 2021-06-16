import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router";

import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";
import CustomInput from "../../components/CustomInput";
import Footer from "../../components/Footer";

// Services
import { patchPost, getPostDetail } from "../../services";

export default function UpdatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    const request = async () => {
      const json = await getPostDetail(id);
      setTitle(json.title);
      setDescription(json.description);
      setAuthor(json.author);
      setImage(json.image);
    };
    request();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatePost = {
        title,
        description,
        image,
        author,
      };
      await patchPost(id, updatePost);
      history.push(`/posts/${id}`);
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
                Update Post
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <AppLoading />
    </React.Fragment>
  );
}
