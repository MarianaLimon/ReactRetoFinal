// URL Base
const API_URL = "http://localhost:8080";

// Endpoints
const postURL = `${API_URL}/posts/`;
const postDetailURL = (id) => `${API_URL}/posts/${id}/`;



// Requests login
const loginURL = `${API_URL}/login/`;

export const postUser = async (data) => {
    const response = await fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };


// Requests Post
export const getPostDetail = async (id) => {
  try {
    const url = postDetailURL(id);
    
    const response = await fetch(url);
    const singlePost = await response.json();
    console.log(singlePost.data);
    return singlePost.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch(postURL);
    const allPost = await response.json();
    console.log(allPost.data);
    return allPost.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const postPost = async (data) => {
  const response = await fetch(postURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

// update

export const patchPost = async (id, data) => {
    const url = postDetailURL(id);
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };