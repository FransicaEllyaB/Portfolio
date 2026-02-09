const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const theme = localStorage.getItem("theme");
const spinner = document.getElementById("spinner");
const sendButton = document.getElementById("send-button");
const element = document.body;

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  });
  
function typeWriter(i = 0, j = 0, back = false){
  const txt = ["Software Engineer", "Project Manager", "Frontend Developer", "Backend Developer"];
  let word = txt[i];
  let speed = 100;
  
  if (!back) {
    document.getElementById("typing").textContent += word.charAt(j);
    j++;
    if (j === word.length){
      setTimeout(typeWriter, 1000, i, j, true);
    }else{
      setTimeout(typeWriter, speed, i, j, false);
    }
  } else {
    word = document.getElementById("typing").textContent.slice(0, -1);
    document.getElementById("typing").textContent = word;
    if (j < 0){
      j = 0;
      back = false;
      i = (i + 1) % txt.length;
    } else {
      j--;
    }
    setTimeout(typeWriter, 50, i, j, back);
  }
  
};
typeWriter();
  
function switchTheme() {
  element.classList.toggle('dark-mode');
  localStorage.setItem("theme", element.classList.contains("dark-mode")?"dark":"light");
}

if (theme === "dark"){
  element.classList.add("dark-mode");
  document.getElementById("slide-box").checked = true;
}

function sendMail() {
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value
  }
  spinner.style.display = "inline-block";

  emailjs.send("service_6g69p4i", "template_nhj6v49", parms)
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    spinner.style.display = "none";
  })
  .catch((error) => {
    console.log('FAILED....', error);
    spinner.style.display = "none";
  });
}

function dummy() {
  console.log("dummy");
  sendButton.disabled = true;
}