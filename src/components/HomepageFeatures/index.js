import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Tutorials",
    img: require("@site/static/img/lego-graduate.png").default,
    url: "/docs/category/tutorials",
    description: <>The best tutorials we've found to program Lego robots.</>,
  },
  {
    title: "Technic Tips",
    img: require("@site/static/img/tip-right-angle-connection.png").default,
    url: "/docs/technic",
    description: <>Tips and terms for building with Lego Technic pieces.</>,
  },
  {
    title: "Useful Links",
    img: require("@site/static/img/lego-book-resources.png").default,
    url: "/docs/links",
    description: <>Useful links for FLL or Lego.</>,
  },
];

function Feature({ img, url, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <a href={url}>
          <img className={styles.featureSvg} role="img" src={img} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={url}>
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
