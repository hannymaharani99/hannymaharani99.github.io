const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">research</span>, <span class="code">education</span>, <span class="code">skills</span>,<span class="code">portfolio</span>',
  about:
    "Hello there, I'm Maharani from Indonesia. I have passion in creating and building a seamless web development. I have experience in application support and cyber security for three years. Also, My interest is in kubernetes development and blockchain. When I'm not working, I love to read books.",
  skills:
    '<span class="code">Programming Languages: </span>HTML & CSS, Python, JavaScript, C++<br><span class="code">Frameworks:</span>React.js, web3.js<br><span class="code">Penetration Testing Skill:</span>Intermediate',
  education:
  '<span class="school">Graduate Study:</span>Information security Management at University of Indonesia',
  //resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "Technical Support, Software Tester, Technical Writer, Web Developer",
  research: '<a href="">The blockchain concept in building a trusted ecosystem in the internet of things</a><br><a href="">honeypot webserver and home network detection system using raspberry pi',
  portfolio: '<span class="code">Front-End:</span><a href="https://hannymaharani99.github.io/portfolio/ " target="_blank">Quote Generator</a><br><span class="code">Write-up: </span><a href="https://medium.com/@maharanirach/jenkins-misconfig-exploitation-1e3afdac6130" target="_blank">Jenkins Misconfig Exploit</a><br><span class="code">Application: </span><a href="https://hannymaharani99.github.io/musicplayer/" target="_blank">Mini Music Player App</a>'
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};



const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};



document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
