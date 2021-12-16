import React from 'react';

import HeroImgPlaceholder from '../../../../assets/video/GLOBO-DESKTOP.8b460fe4.jpg';
import HeroVideo from '../../../../assets/video/GLOBO-DESKTOP.m4v';

import { ReactComponent as LogoPlaneta } from '../../../../assets/svg/logo-cultura.svg';
import { Container } from './styles';

export default function Hero() {
  return (
    <Container>
      <LogoPlaneta alt="logo-cultura" className="middle-logo-cultura" />
      <video
        loop
        autoPlay
        muted
        src={HeroVideo}
        id="videoHero"
        type="video/mp4"
      />
      <img src={HeroImgPlaceholder} />
    </Container>
  );
}
