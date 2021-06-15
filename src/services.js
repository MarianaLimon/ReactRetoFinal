// URL Base
const API_URL = "https://react-11g-default-rtdb.firebaseio.com/";

// Endpoints
const postURL = `${API_URL}/posts/.json`;
const postDetailURL = (id) => `${API_URL}/posts/${id}/.json`;



// Requests login
const loginURL = `${API_URL}/login/.json`;

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
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch(postURL);
    return await response.json();
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