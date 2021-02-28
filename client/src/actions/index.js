import jsonServer from '../api/jsonServer';

export const getBlogPosts = () => async dispatch => {
  const response = await jsonServer.get('/blogposts');
  dispatch({
    type: 'GET_POSTS',
    payload: response.data
  });
};

export const addBlogPost = (title, content, callback) => async dispatch => {
  const response = await jsonServer.post('/blogposts', { title, content });
  dispatch({
    type: 'ADD_POST',
    payload: response.data
  });
  if (callback) {
    callback();
  }
};

export const deleteBlogPost = (id) => async dispatch => {
  await jsonServer.delete(`/blogposts/${id}`);
  dispatch({
    type: 'DELETE_POST',
    payload: id
  });
};

export const editBlogPost = (id, title, content, callback) => async (dispatch) => {
  await jsonServer.put(`/blogposts/${id}`, { title, content });
  dispatch({
    type: 'EDIT_POST',
    payload: { id, title, content },
  });

  if (callback) {
    callback();
  }
};
