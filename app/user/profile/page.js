import React from 'react';

function UserPage(props) {
  const { username, email, address } = props;

  return (
    <div>
      <h1>User Information</h1>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
}

export default UserPage;
