import React, { useState } from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';
import { profile } from '../../mocks';
import { FaAngleDown } from 'react-icons/fa';
import Translator from '../../../i18n/translator';

export default function People({ peopleNumber }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <Container propShowMore={showMore}>
      <section>
        {profile.slice(-1 + peopleNumber, 0 + peopleNumber).map((item) => (
          <div key={item.id} className="show-more-section">
            <button
              type="button"
              className="profile-button"
              onClick={() => setShowMore(!showMore)}
            >
              <Translator path="buttons.title" /> <FaAngleDown />
            </button>
            <div
              className="show-about-me"
              style={
                showMore
                  ? {
                      maxHeight: '100%',
                      height: 'unset',
                      opacity: '1',
                    }
                  : null
              }
            >
              <p>{item.aboutMe}</p>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}

People.propTypes = {
  children: PropTypes.node.isRequired,
};
