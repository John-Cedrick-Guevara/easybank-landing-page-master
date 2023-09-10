import React from "react";

const Reasons = () => {
  const reasonsArr = [
    {
      index: 1,
      heading: "Online Banking",
      image: "icon-online",
      texts: `  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.`,
    },
    {
      index: 2,
      heading: "Open API",
      image: "icon-budgeting",
      texts: `   See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.`,
    },
    {
      index: 3,
      heading: "Fast Onboarding",
      image: "icon-onboarding",
      texts: `   We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.`,
    },
    {
      index: 4,
      heading: "Open API",
      image: "icon-api",
      texts: `   Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier..`,
    },
  ];

  return (
    <main className="reasons">
      <h1 className="reason-heading">Why choose Easybank?</h1>
      <p className="reason-para">
        We leverage Open Bankings to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>

      <section className="reasons-contents">
        {reasonsArr.map((item) => (
          <div key={item.index} className="content-container">
            <img src={`../images/${item.image}.svg`} alt="asd" />
            <h1 className="reason-content-heading">{item.heading}</h1>
            <p className="reason-content-para">{item.texts}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Reasons;
