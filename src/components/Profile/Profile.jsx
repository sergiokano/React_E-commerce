import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin, Card } from 'antd';
import { PhoneOutlined, MailOutlined, TagOutlined } from "@ant-design/icons";
import "./Profile.scss";

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);
  const [selectedImage] = useState (0);
  const images = [
    "https://cdn.shopify.com/s/files/1/0574/0127/8625/products/Wildsmith_EyeSerum_HR_bae48101-5214-4b44-97aa-6b4570fc666b_1000x.png?v=1623667289",
  ];
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="container-profile">
      <p>Your profile</p>
      {!user ?
        <Spin size="large" /> :
        <div className="site-card-border-less-wrapper ">

          <Card
            title={user.name}
            bordered={false}
            style={{
              width: 300,
              border: "1px solid gray",
              background: "transparent",
              color: "lightGray",
            }}
          >
            <p><MailOutlined /> {user.email}</p>
            <p><PhoneOutlined /> {user.phone}</p>
            <p><TagOutlined /> {user.address}</p>
            <br />
            <span>{user?.Orders?.map(order => order.Products.map(product => <p key={product.id}> Your order: {product.name}</p>))}</span>
            <img src={images[selectedImage]} alt="" width={250}/>

          </Card>
        </div>
      }
    </div>
  );
};

export default Profile