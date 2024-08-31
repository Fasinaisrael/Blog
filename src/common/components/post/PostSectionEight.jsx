import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../utils";
import ImageCrad from "../../../../public/image/back-news-img-1.jpg";

const PostSectionEight = () => {
  // const firstPost = postData[0];
  const fuzionFirstPost = [
    {
      featureImg: "",
      title: "A five step frame work for effective keyword target",
      cate: "hello world",
      author_img: "helloworld",
      author_name: "Name",
    },
    {
      featureImg: "",
      title: "A five step frame work for effective keyword target",
      cate: "hello world",
      author_img: "helloworld",
      author_name: "Name",
    },
    {
      featureImg: "",
      title: "A five step frame work for effective keyword target",
      cate: "hello world",
      author_img: "helloworld",
      author_name: "Name",
    },
    {
      featureImg: "",
      title: "A five step frame work for effective keyword target",
      cate: "hello world",
      author_img: "helloworld",
      author_name: "Name",
    },
    {
      featureImg: "",
      title: "A five step frame work for effective keyword target",
      cate: "hello world",
      author_img: "helloworld",
      author_name: "Name",
    },
  ];
  const fuzionPostData = [
    {
      id: 1,
      name: "Alice",
      title: "Research",
      cate: "hello world",
      featureImg: ImageCrad,
    },
    {
      id: 2,
      name: "Bob",
      title: "Research",
      cate: "hello world",
      featureImg: ImageCrad,
    },
    {
      id: 3,
      name: "Charlie",
      title: "Research",
      cate: "hello world",
      featureImg: ImageCrad,
    },
    {
      id: 4,
      name: "Bob",
      title: "Research",
      cate: "hello world",
      featureImg: ImageCrad,
    },
    {
      id: 5,
      name: "Charlie",
      title: "Research",
      cate: "hello world",
      featureImg: ImageCrad,
    },
  ];

  return (
    <div className="axil-seo-post-banner seoblog-banner axil-section-gap bg-color-grey">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-12 col-12">
            <div className="content-block post-grid post-grid-large">
              {fuzionFirstPost.featureImg ? (
                <div className="post-thumbnail">
                  {/* <Link href={`/post/${firstPost.slug}`}> */}
                  <Link href={"/post/#"}>
                    <a>
                      <Image
                        src={fuzionFirstPost.featureImg}
                        alt={fuzionFirstPost.title}
                        height={600}
                        width={705}
                        priority={true}
                      />
                    </a>
                  </Link>
                </div>
              ) : (
                ""
              )}
              <div className="post-grid-content">
                <div className="post-content">
                  <div className="post-cat">
                    <div className="post-cat-list">
                      {/* <Link href={`/category/${slugify(firstPost.cate)}`}> */}
                      <Link href={"/category/"}>
                        <a className="hover-flip-item-wrapper">
                          <span className="hover-flip-item">
                            <span data-text={fuzionFirstPost.cate}>
                              {fuzionFirstPost.cate}
                            </span>
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <h3 className="title">
                    {/* <Link href={`/post/${firstPost.slug}`}> */}
                    <Link href={"/post/#"}>
                      <a>{fuzionFirstPost.title}</a>
                    </Link>
                  </h3>
                  <div className="post-meta-wrapper">
                    <div className="post-meta">
                      <div className="post-author-avatar border-rounded">
                        <Image
                          src={ImageCrad}
                          alt={fuzionFirstPost.author_name}
                          height={50}
                          width={50}
                        />
                      </div>
                      <div className="content">
                        <h6 className="post-author-name">
                          <Link
                            // href={`/author/${slugify(firstPost.author_name)}`}
                            href={`/author/#`}
                          >
                            <a className="hover-flip-item-wrapper">
                              <span className="hover-flip-item">
                                <span data-text={fuzionFirstPost.author_name}>
                                  {fuzionFirstPost.author_name}
                                </span>
                              </span>
                            </a>
                          </Link>
                        </h6>
                        {/* <ul className="post-meta-list">
                          <li>{firstPost.date}</li>
                          <li>{firstPost.post_views}</li>
                        </ul> */}
                      </div>
                    </div>
                    <ul className="social-share-transparent justify-content-end">
                      {/* {firstPost.author_social.map((data) => (
                        <li key={data.url}>
                          <a href={data.url}>
                            <i className={data.icon} />
                          </a>
                        </li>
                      ))} */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-12 mt_md--30 mt_sm--30">
            {fuzionPostData.map((data) => (
              <div
                className="content-block post-medium post-medium-border"
                key={data.id}
              >
                {data.featureImg ? (
                  <div className="post-thumbnail">
                    {/* <Link href={`/post/${data.slug}`}> */}
                    <Link href={`/post/#`}>
                      <a>
                        <Image
                          src={ImageCrad}
                          alt={"data.title"}
                          height={100}
                          width={100}
                          priority={true}
                        />
                      </a>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                <div className="post-content">
                  <div className="post-cat">
                    <div className="post-cat-list">
                      {/* <Link href={`/category/${slugify(data.cate)}`}> */}
                      <Link href={`/category/#`}>
                        <a className="hover-flip-item-wrapper">
                          <span className="hover-flip-item">{data.cate}</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <h4 className="title">
                    {/* <Link href={`/post/${data.slug}`}> */}
                    <Link href={`/post/#`}>
                      <a>{data.title}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionEight;
