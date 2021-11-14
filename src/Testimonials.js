import React from "react";
import { reviews } from "./data";
import { Slide } from "react-awesome-reveal";

export const Testimonials = () => {
  return (
    <div>
      <h1 className="review-header">CLIENT TESTIMONIALS</h1>
      <section className="reviews" id="reviews">
        {reviews.map((review) => {
          const { id, name, text, image, position } = review;
          return (
            <Slide direction="up" triggerOnce="true">
              <div key={id}>
                <div className="all-reviews">
                  <img src={image} alt={name} />
                  <section>
                    <p>{text}</p>
                    <h3>{name}</h3>
                    <p className="position">{position}</p>
                  </section>
                </div>
              </div>
            </Slide>
          );
        })}
      </section>
    </div>
  );
};
