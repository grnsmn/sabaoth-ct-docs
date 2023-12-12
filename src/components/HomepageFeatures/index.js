import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Vuoi conoscere quali strumenti digitali vengono usati o vorresti iniziare a collaborarci? ',
    Svg: require('@site/static/img/logoBlack.svg').default,
    description: (
      <>
       Questo sito è pensato proprio per la formazione o come punto di riferimento per la conoscenza degli strumenti e 
       le tecniche digitali utilizzate per supportare dal punto di vista tecnico le presentazione e la produzione
       dei contenuti pubblicati sui nostri canali social
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
        <div className="row" >
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
