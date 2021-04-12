import React, { useState } from 'react';
import { Container } from './styles';
import { FaAngleLeft, FaLinkedinIn } from 'react-icons/fa';
import { profile } from './mocks';
import TeamMobile from './components/teamOnMobile';
import AboutMe from './components/People';

export default function Perfil() {
  const [peopleCardMobile, setPeopleCardMobile] = useState(1);

  const nextSlider = () => {
    if (peopleCardMobile !== 9) {
      setPeopleCardMobile(peopleCardMobile + 1);
    } else {
      setPeopleCardMobile(1);
    }
  };

  const prevSlider = () => {
    if (peopleCardMobile !== 1) {
      setPeopleCardMobile(peopleCardMobile - 1);
    } else {
      setPeopleCardMobile(9);
    }
  };

  return (
    <Container propPeopleCard={peopleCardMobile}>
      <div className="top-right">
        <button
          type="button"
          className="top-left-previous-button"
          onClick={() => prevSlider()}
        >
          <FaAngleLeft />
        </button>
        <button
          type="button"
          className="top-left-next-button"
          onClick={() => nextSlider()}
        >
          <FaAngleLeft />
        </button>
      </div>

      <section className="slide-section">
        <section className="team-section">
          {profile
            .slice(1 + peopleCardMobile, 6 + peopleCardMobile)
            .map((item) => (
              <section className="people-card" key={item.id}>
                <div className="people-pic">
                  {item.pic}
                  {item.pic}
                  <a href={item.href} alt="linkedin" className="linkedin">
                    <FaLinkedinIn />
                  </a>
                </div>

                <div className="about-me">
                  <h1>{item.peopleName} </h1>
                  <h3> {item.career}</h3>

                  <AboutMe peopleNumber={item.id} />
                </div>
              </section>
            ))}
        </section>
      </section>
      <TeamMobile />
    </Container>
  );
}
