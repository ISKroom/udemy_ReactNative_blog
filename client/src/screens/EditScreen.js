import React from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { connect } from 'react-redux';
import { editBlogPost } from '../actions';

const EditScreen = ({ navigation, posts, editBlogPost }) => {
  const id = navigation.getParam('id');

  const blogPost = posts.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts)
  }
}

export default connect(
  mapStateToProps,
  { editBlogPost }
)(EditScreen);
