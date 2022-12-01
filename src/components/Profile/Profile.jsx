import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin } from 'antd';

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {!user ? <Spin size="large" />: <p> {user.name}</p>}
    </div>
  );
};

export default Profile