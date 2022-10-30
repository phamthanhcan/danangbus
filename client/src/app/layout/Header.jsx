/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import MenuBar from "../components/MenuBar";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <React.Fragment>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
        `}
      >
        <p>Trung tâm điều hành Đèn tín hiệu giao thông & Vận tải công cộng Đà Nẵng (Datramac)</p>
        <div>
          <button>Đăng nhập</button>
          <button>Đăng ký</button>
        </div>
      </div>
      <div 
        css={css`
          display: flex;
          justify-content: space-between;
          height: 60px;
        `}
      >
        <Logo/>
        <MenuBar/>
      </div>
    </React.Fragment>
  )
}

export default Header;
