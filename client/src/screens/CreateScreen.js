import React from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { connect } from 'react-redux';
import { addBlogPost } from '../actions';

const CreateScreen = ({ navigation, addBlogPost }) => {
  return (
    <>
      <BlogPostForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate('Index'));
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default connect(
  null,
  { addBlogPost }
)(CreateScreen);
