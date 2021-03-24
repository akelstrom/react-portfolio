import React from "react";

const About = () => (
  <div>
    <h4 className="light-weight">About Me</h4>
    <p>
      Hardworking Full-Stack Web Developer who is passionate about growing
      professionally and making outstanding creative contributions. Background
      in design and customer service, which contribute toward attention to
      detail, ability to work under pressure, and knack for creating polished,
      creative deliverables. Curious personality and always excited to learn.
      <br />
      <br />
      In my free time I love to cook and enjoy eating the food I make with
      friends and family. I love listening to all types of music. I currently
      live in South Philadelphia, but my homebase has always been Chicago. I
      have traveled and lived overseas for a good chunk of my life (6 countries
      before the age of 10, listed in the picture below).
      <br />
      <br />
      Oh.. and I &hearts; hot dogs.
    </p>
    <div className="container2">
      <div className="row2">
        <div className="column2">
          <img
            src={"assets/images/happy.jpeg"}
            width="250px"
            height="250px"
            alt="happy"
          />
        </div>
        <div className="column2 middle">
          <img
            src={"assets/images/door.jpeg"}
            width="250px"
            height="600px"
            alt="places-lived"
          />
        </div>
        <div className="column2">
          <img
            src={"assets/images/hotdog.jpg"}
            width="350px"
            height="250px"
            alt="hot-dog"
          />
        </div>
      </div>
    </div>
  </div>
);
export default About;
