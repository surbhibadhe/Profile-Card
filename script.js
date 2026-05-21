const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark-mode");
};

const popup = document.getElementById("popup");

const messageBtn = document.getElementById("messageBtn");

messageBtn.onclick = () => {

    popup.style.display = "flex";
};

popup.onclick = (e) => {

    if(e.target === popup){

        popup.style.display = "none";
    }
};