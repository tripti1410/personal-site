import React from "react";
import { Helmet } from 'react-helmet';
import PageTitle from "../../components/page-title/page-title";
import BLOGS from "./blogs-data";

import "./blogs.css";

const Card = ({ blog }) => {
  return (
    <article className="blog-card">
      <a href={blog.slug}>
        <div className="blog-image-container">
          <img src={blog.image} alt={blog.title} />
        </div>
        <div className="blog-content">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-summary">{blog.subtitle}</p>
        </div>
      </a>
    </article>
  );
};

const Blogs = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Blogs | Trapti</title>
      </Helmet>
      <PageTitle pageTitle="Blogs" />
      <div className="blogs">
        {BLOGS.map(blog => <Card key={blog.id} blog={blog} />)}
      </div>
    </React.Fragment>
  );
};

export default Blogs;
