const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const theme = localStorage.getItem("theme");
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