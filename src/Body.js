import React from "react";

export const Body = () => {
  return (
    <section>
      <div className="body-info egg-div" id="about">
        <img
          src="https://dl.airtable.com/.attachmentThumbnails/5584d0ed9767a8bdc7681ec4dd85080c/393a6a7c"
          alt="egg"
        />
        <div className="info info1">
          <h1>
            Transform your <br /> brand
          </h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <h3>Learn more</h3>
        </div>
      </div>
      <div className="body-info cup-div">
        <img
          src="https://dl.airtable.com/.attachmentThumbnails/37ee8c1b400452708f179bd357175569/3e3464c4"
          alt="cup"
        />
        <div className="info info2">
          <h1>
            Stand out to the <br /> right audience
          </h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <h3>Learn more</h3>
        </div>
      </div>
      <div className="full-services">
        <div className="services graphic-design" id="service">
          <div className="graphic-info">
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="services photography">
          <div className="photography-info">
            <h1 className="photo-text">Photography</h1>
            <p className="photo-text">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
