import React from 'react';
import './script';

function App() {
  return (
    // eslint-disable-next-linenpm
<body><section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-3 is-flex">
          <div class="column-child sidebar shadow">
            <div class="sidebar-header has-text-centered">
              <div class="photo"><a href="https://hannymaharani99.github.io"><img src="logo-header.gif" /></a></div>
              <div title="created by @luxovum"><img src="cbrpnkgradient.png" /></div>
              <br />
              <h2 class="header-name">Maharani (Hanny)</h2>
              <h5>Cyber Security Enthusiast</h5>
              <div class="social-icons">
                <a href="https://www.linkedin.com/in/maharani28/" title="click here to see her linkedin profile"><i class="fab fa-linkedin-in" /></a>
                <a href="https://github.com/hannymaharani99" title="click here to see her github"><i class="fab fa-github-square" /></a>
                <a href="https://medium.com/@maharanirach" title="Maharani on Medium"><i class="fa-brands fa-medium" /></a>
              </div>
              <div class="resume">
              </div>
            </div>
          </div>
        </div>
        <div class="column is-flex">
          <div class="column-child terminal shadow">
            <div class="terminal-bar dark-mode">
              <div class="icon-btn close"></div>
              <div class="icon-btn min"></div>
              <div class="icon-btn max"></div>
              <div class="terminal-bar-text is-hidden-mobile dark-mode-text">guest@hanilinux: ~</div>
            </div>
            <div class="terminal-window primary-bg" onClick="document.getElementById('dummyKeyboard').focus();">
              <div class="terminal-output" id="terminalOutput">
                <div class="terminal-line">
                  <span class="help-msg">Welcome to Maharani's portfolio — Type <span class="code">help</span> for a list of supported commands.</span>
                </div>
              </div>
              <div class="terminal-line">
                <span class="success">➜</span> <span class="directory">~</span> <span class="user-input" id="userInput"></span>
                <input type="text" id="dummyKeyboard" class="dummy-keyboard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Built with <i class="fas fa-heart icon"></i> in <i class="fab fa-react" style={{color: 'white'}} />
      </p>
    </div>
  </footer>
</section>
<script  src="./script.js"></script>
</body>
  );
}

export default App;
