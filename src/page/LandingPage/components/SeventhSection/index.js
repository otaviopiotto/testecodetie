import React from 'react';

import { Container } from './styles';
import Profile from '../../../../components/PerfilPeople';
import Translator from '../../../../components/i18n/translator';

export default function SeventhSection() {
  return (
    <Container>
      <section className="title-section" id="equipe" data-aos="fade-up-right">
        <h1 className="section-title">
          <Translator path="SeventhSection.title" />
        </h1>
        <p>
          <Translator path="SeventhSection.description" />
        </p>
      </section>

      <Profile />
    </Container>
  );
}
