import React from 'react';
import { Follow } from 'react-twitter-widgets';

class UserSocial extends React.Component {
  render() {
    return (
      <div className="author-infos">
        <Follow
          username="manoz"
          options={{
            count: true,
            size: 'large',
          }}
        />
      </div>
    );
  }
}

export default UserSocial;
