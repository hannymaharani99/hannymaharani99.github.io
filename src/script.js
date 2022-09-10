const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">research</span>, <span class="code">education</span>, <span class="code">skills</span>,<span class="code">portfolio</span>',
  about:
    "Hello, I'm Maharani from Indonesia. I have passion in Cyber security especially in Bug Bounty & Red Team training. Also I like to painting pictures when I’m not working.",
  skills:
    '<span class="code">Specialization: </span>Web Dev, Python, SQL for Data Analyst, Cloud Services<br><span class="code">Training:</span>Security+, Alibaba Cloud Associate, CCNA Security & CyberOps<br><span class="code">Interest:</span>Penetration Testing, Incident Responder',
  education:
  '<span class="school">Graduate Study:</span>Information & Network Security Management at University of Indonesia',
  //resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "Technical Support, QA Tester (Freelance), Technical Writer, Web Developer (Freelance)",
  research: '<a href="">The blockchain concept in building a trusted ecosystem in the internet of things</a><br><a href="">honeypot webserver and home network detection system using raspberry pi</a><br><a href="">Smart Aquaponic using Android',
  portfolio: '<span class="code">Front-End:</span><a href="https://hannymaharani99.github.io/portfolio/ " target="_blank" rel="noreferrer noopener">Quote Generator</a><br><span class="code">Write-up: </span><a href="https://medium.com/@maharanirach/jenkins-misconfig-exploitation-1e3afdac6130" target="_blank" rel="noreferrer noopener">Jenkins Misconfig Exploit</a><br><span class="code">Application: </span><a href="https://hannymaharani99.github.io/musicplayer/" target="_blank" rel="noreferrer noopener">Mini Music Player App</a>'
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