import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Image from '../../atoms/Image';
import './UserDetails.scss';

const UserDetails = () => {
  const { name, lastName, age, email, avatarLink, blogPosts } = useContext(
    UserContext
  );

  return (
    <section className='user-details'>
      <div className='user-details__avatar'>
        <Image src={avatarLink} alt='Avatar' />
      </div>

      <div className='user-details__details'>
        <h2>User details</h2>
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Last Name: </b>
          {lastName}
        </p>
        <p>
          <b>Age: </b>
          {age}
        </p>
        <p>
          <b>E-Mail: </b>
          {email}
        </p>
      </div>

      <div className='user-details__blog'>
        <h2>Your posts:</h2>
        <span>{blogPosts}</span>
      </div>
    </section>
  );
};

export default UserDetails;
