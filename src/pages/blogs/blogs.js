import React from "react";
import PageTitle from "../../components/page-title/page-title";

import "./blogs.css";

const Card = () => {
  return (
    <article className="blog-card">
      <div className="blog-image-container">
        <img src="http://via.placeholder.com/350x280" alt="blog-image" />
      </div>
      <div className="blog-content">
        <h3 className="blog-title">Blog Title</h3>
        <p className="blog-summary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </article>
  );
};

const BLOGS = ["1", "2", "3", "4", "5", "6"];

const Blogs = () => {
  return (
    <React.Fragment>
      <PageTitle pageTitle="Blogs" />
      <div className="blogs">{BLOGS.map(blog => <Card key={blog} />)}</div>
    </React.Fragment>
  );
};

export default Blogs;
