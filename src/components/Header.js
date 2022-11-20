import React from 'react';
import Navigation from './Navigation';

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className='flex-row px-1'>
          <div>
            <h1>Shawn's Portfolio</h1>
          </div>
          <div>
            {/* <Navigation
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Navigation> */}
          </div>
        </header>
      </section>
      <section class='hero'>
        <div class='hero-cta'>
          <h2>Welcome</h2>
          <p>
            Welcome to Shawn's Portfolio, built with React.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;