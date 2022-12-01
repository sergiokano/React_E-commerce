import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin } from 'antd';
import { Card } from 'antd';

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="container-profile">
      <p>Your profile</p>
      {!user ? 
      <Spin size="large" />: 
      <div className="site-card-border-less-wrapper">   
        
        <Card
      title={user.name}
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p> Email: {user.email}</p>
      <p>Phone number: {user.phone}</p>
      <p>Adsress: {user.address}</p>
    </Card>
        </div>
   }
    </div>
  );
};

export default Profile