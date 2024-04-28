import backgroundImage from "../images/background.jpg";
import icon from "../images/icon.png";
import { FaTwitter, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className="main-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* overlayはカバー画像の上に透過して表示される背景要素です */}
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/* カバー画像 */}
            <div
              className="profile-thumb"
              style={{ backgroundImage: `url(${icon})` }}
            ></div>
            {/* 名前と肩書はみなさんのお名前や肩書を自由に入れてください */}
            <h1 className="title-text">かえで</h1>
            <h3 className="title-text">Webエンジニア</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://twitter.com/">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
