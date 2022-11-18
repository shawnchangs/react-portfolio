import React from 'react';

function Footer() {
  return (
    <footer>
      <h2>Made by Shawn C.</h2>
      <p>
        <ul>
          <a href="https://github.com/shawnchangs">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/shawn-s-chang">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;