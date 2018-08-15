import React from 'react';
import styled from 'styled-components';

import profilePic from './profile-pic.png';

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
`;

class UserBio extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: '4.375rem' }}>
        <BioContainer>
          <Img src={profilePic} alt="Manoz profile pic" />
          <p style={{ margin: '0 auto', fontSize: '1.1rem' }}>
            My name is Kevin a.k.a <strong>Manoz</strong>. I am a front-end developer who lives in
            Lyon, France. <br />I work in a web agency who builds websites using Laravel, React or
            WordPress depending on our clients.
          </p>
        </BioContainer>
      </div>
    );
  }
}

export default UserBio;
