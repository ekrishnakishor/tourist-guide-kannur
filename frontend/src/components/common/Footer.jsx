import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import FooterLogo from '../../assets/img/logo-kannur.webp'

function Footer() {
  const dispatch = useDispatch();

  return (
    <>
      <footer>
        <div class="copyright">
          <img src={FooterLogo} alt="logo" onClick={() => dispatch(push('/'))} />
          <p>© 2022 Travel Guide LLC All rights reserved.</p>
        </div>
        <div class="privacy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use </a>
          <a href="#">Sitemap</a>
        </div>
        <div class="version">
          <p>
            Travel Guide helps to find the best places to visit near your Town<br />
            This Web App is focused on Kannur and it's beauty
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
