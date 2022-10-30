/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const MenuItem = ({content}) => {
  return (
    <li
      css={css`
        height: 100%;
      `}
    >
      <button
        css={css`
          background-color: #00aeef;
          color: #ffffff;
          border: none;
          outline: none;
          height: 100%;
          padding: 20px;
          font-size: 14px;
        `}
      >{content}</button>
    </li>
  )
}

const MenuBar = () => {
  return (
    <ul
      css={css`
        display: flex;
        align-items: center;
        height: 100%;
      `}  
    >
      <MenuItem content="GIỚI THIỆU"/>
      <MenuItem content="LỘ TRÌNH TUYẾN"/>
      <MenuItem content="VÉ XE BUÝT"/>
      <MenuItem content="BIỂU MẪU"/>
      <MenuItem content="TIN TỨC"/>
      <MenuItem content="LIÊN HỆ"/>
      <MenuItem content="TÌM ĐƯỜNG"/>
    </ul>
  )
}

export default MenuBar;
