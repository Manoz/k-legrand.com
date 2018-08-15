import React from 'react';
import styled from 'styled-components';

import profilePic from './images/profile-pic.png';

const BioContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-flow: row nowrap;
  max-width: 82%;
`;

const Img = styled.img`
  margin-right: 0.875rem;
  border-radius: 100%;
  border: 4px solid #ebebeb;
  width: 64px;
  height: 64px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease;
  }
`;

const P = styled.p`
  font-family: 'Roboto', sans-serif;
`;

class UserBio extends React.Component {
  render() {
    return (
      <div className="user-bio" style={{ marginBottom: '4.375rem' }}>
        <BioContainer>
          <Img src={profilePic} alt="Manoz profile pic" />
          <P style={{ margin: '0 auto', fontSize: '1.1rem' }}>
            My name is Kevin a.k.a <strong>Manoz</strong>. I am a front-end developer who lives in
            Lyon, France. <br />I work in a web agency who builds websites using Laravel, React or
            WordPress depending on our clients.
          </P>
        </BioContainer>
      </div>
    );
  }
}

export default UserBio;
