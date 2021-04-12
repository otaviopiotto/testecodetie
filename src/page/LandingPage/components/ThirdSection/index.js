import React from 'react';

import { Container } from './styles';
import { ReactComponent as Celeste } from '../../../../assets/svg/Celeste.svg';
import { ReactComponent as Baleinha } from '../../../../assets/svg/Baleinha.svg';

import Carousel from './components/Carousel';
import Translator from '../../../../components/i18n/translator';

export default function ThirdSection() {
  return (
    <Container>
      <div className="main-info" id="design" data-aos="fade-up-left">
        <div className="left-side">
          <h1>
            <Translator path="ThirdSection.title" />
          </h1>

          <p>
            <Translator path="ThirdSection.description" />
          </p>
        </div>

        <div className="right-side">
          <Celeste className="celeste-svg" />
          <Baleinha className="baleinha-svg" />
          <Carousel />
        </div>
      </div>
    </Container>
  );
}
