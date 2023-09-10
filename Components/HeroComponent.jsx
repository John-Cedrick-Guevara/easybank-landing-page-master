import React from "react";

const HeroComponent = () => {
  return (
    <main className="hero">
      <div className="hero-image">
        <img className="mockups" src="../images/image-mockups.png" alt="" />
      </div>

      <div className="texts">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easyband account will be a
          one-step-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="invite">Request Invite</button>
      </div>
    </main>
  );
};

export default HeroComponent;
