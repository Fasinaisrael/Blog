import React from "react";
import HeaderTwo from "../common/elements/header/HeaderTwo";
import PostSectionEight from "../common/components/post/PostSectionEight";
import PostSectionTwo from "../common/components/post/PostSectionTwo";
import PostSectionSeven from "../common/components/post/PostSectionSeven";
const fuzionBlog = () => {
  return (
    <>
      <HeaderTwo />
      <PostSectionEight />
      <PostSectionTwo adBanner={true} headingTitle="What's new at Bloger" />
      <PostSectionSeven />
    </>
  );
};

export default fuzionBlog;
