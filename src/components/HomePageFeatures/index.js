import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to install',
    image: require('@site/static/img/bghome.png').default,
    description: (
      <>
        NExp has a CLI to install it the way you need.
      </>
    ),
  },
  {
    title: 'Flexibility',
    image: require('@site/static/img/footer_landing-01.png').default,
    description: (
      <>
        Super flexible to be able to use various types of ORM and HTTP libraries.
        Separating the layers without harming scaling.
      </>
    ),
  },
  {
    title: 'Innovation LabX',
    image: require('@site/static/img/InnovationLabx_2.png').default,
    description: (
      <>
        Node Experience is part of Innovation Lab X of DigiChanges where we are committed to
        generating open source tools for the community.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
