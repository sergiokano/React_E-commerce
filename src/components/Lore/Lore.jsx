import React from "react";
import "./Lore.scss";

const Lore = () => {
  return (
    <div className="lore">
      <div className="text">
        <span className="p1">The future</span>
        <span className="p2">of cosmetics</span>
        <span className="p3">is in</span>
        <span className="p4">your hands</span>
      </div>
      <div className="img">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b448c2148360785.62d47a8de9bfb.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Lore;
