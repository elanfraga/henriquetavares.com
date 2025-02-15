import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    const { lang } = this.props;

    const bioPTBr =
      'sou um desenvolvedor apaixonado por Javascript, ReactJS, React Native, NodeJS e tudo que envolve essas tecnologias.';
    const bioEn =
      "i'm developer in love about Javascript, ReactJS, React Native, NodeJS and every ecosystem around these technologies.";

    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Henrique Tavares`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <span style={{ maxWidth: 500 }}>
          <a href="https://github.com/tavareshenrique">Henrique Tavares</a>{' '}
          <p>{lang === 'pt-br' ? bioPTBr : bioEn}</p>{' '}
        </span>
      </div>
    );
  }
}

export default Bio;
