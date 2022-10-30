/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Logo = () => {
  return (
    <div 
      css={css`
        width: 200px;
        height: 60px;
      `}
    >
      <img src="https://www.danangbus.vn/UploadImages/logo.png" alt="logo" />
    </div>
  )
}

export default Logo;
