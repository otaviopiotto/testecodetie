import React, { useState } from 'react';
import { Container } from './styles';
import { FaAngleLeft, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../../mocks';
import AboutMe from '../People';

export default function PerfilMobile() {
  const [peopleCardMobile, setPeopleCardMobile] = useState(1);

  const nextSlider = () => {
    if (peopleCardMobile !== 10) {
      setPeopleCardMobile(peopleCardMobile + 1);
    } else {
      setPeopleCardMobile(1);
    }
  };

  const prevSlider = () => {
    if (peopleCardMobile !== 1) {
      setPeopleCardMobile(peopleCardMobile - 1);
    } else {
      setPeopleCardMobile(10);
    }
  };

  return (
    <Container propPeopleCard={peopleCardMobile}>
      <section className="team-section-mobile">
        <button
          type="button"
          className="previous-button-mobile"
          onClick={() => prevSlider()}
        >
          <FaAngleLeft />
        </button>
        <button
          type="button"
          className="next-button-mobile"
          onClick={() => nextSlider()}
        >
          <FaAngleLeft />
        </button>
        {profile
          .slice(-1 + peopleCardMobile, 0 + peopleCardMobile)
          .map((item) => (
            <section className="people-card-mobile" key={item.id}>
              <div className="people-pic-mobile">
                {item.pic}

                <a href={item.href} alt="linkedin" className="linkedin">
                  <FaLinkedinIn />
                </a>
              </div>

              <div className="about-me-mobile">
                <h1>{item.peopleName} </h1>
                <h3> {item.career}</h3>

                <AboutMe peopleNumber={item.id} />
              </div>
            </section>
          ))}
      </section>
    </Container>
  );
}
