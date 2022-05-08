import React, { useState } from "react";
import MainImg from "../../assets/img/MainImg.png";
import ImageCartLogo from "../../assets/img/Dribbble-Light-Preview.png";

const MainImage = () => {
  const [checkUser, setCheckUser] = useState(false);
  return (
    <>
      <section class="main-visual">
        <div class="main-catch"></div>
        <img src={MainImg} alt="" />
        {checkUser && (
          <p class="img">
            <a href="/cart">
              <img src={ImageCartLogo} alt="" />
            </a>
          </p>
        )}
      </section>
    </>
  );
};

export default MainImage;
