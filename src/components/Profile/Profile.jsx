import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin, Card  } from 'antd';
import { PhoneOutlined, MailOutlined, TagOutlined } from "@ant-design/icons";

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
      <p> <MailOutlined /> {user.email}</p>
      <p><PhoneOutlined /> {user.phone}</p>
      <p><TagOutlined /> {user.address}</p>
    </Card>
        </div>
   }
    </div>
  );
};

export default Profile