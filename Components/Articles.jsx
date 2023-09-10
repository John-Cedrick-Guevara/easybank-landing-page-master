import React from "react";

const Articles = () => {
  const articlesArr = [
    {
      index: 1,
      image: "image-currency",
      author: "Claire Robinson",
      heading: "Receive money in any currency with no fees",
      content: `  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …`,
    },
    {
      index: 2,
      image: "image-restaurant",
      author: "Wilson Hutton",
      heading: "Treat yourself without worrying about money",
      content: `  Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …
`,
    },
    {
      index: 3,
      image: "image-plane",
      author: "Wilson Hutton",
      heading: " Take your Easybank card wherever you go",
      content: `   We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …`,
    },
    {
      index: 4,
      image: "image-confetti",
      author: "Claire Robinson",
      heading: "Our invite-only Beta accounts are now live!",
      content: `    After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...`,
    },
  ];

  return (
    <main className="articles">
      <h1 className="title">Latest Articles</h1>

      <div className="article-container">
        {articlesArr.map((item) => (
          <section className="article">
            <img src={`../images/${item.image}.jpg`} alt="" />
            <div className="article-texts">
              <p className="author">By {item.author}</p>
              <h1 className="article-header">{item.heading}</h1>
              <p className="article-content">{item.content}</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Articles;
