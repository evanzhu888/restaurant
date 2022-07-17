const about = () => {

    let content = document.getElementById("content");
    let about = document.createElement("div");
    content.innerHTML = "";
    about.classList.add("about");
    about.style.background = "rgba(40, 40, 40, 0.8)";

    let aboutlabel = document.createElement("div");
    aboutlabel.classList.add("aboutlabel");
    aboutlabel.innerText = "About Us";

    let aboutsect = document.createElement("div");
    aboutsect.classList.add("aboutsect");
    aboutsect.innerText = "To be, or not to be: that is the question: whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles, and by opposing end them? To die: to sleep; no more; and, by a sleep to say we end the heart-ache and the thousand natural shocks that flesh is heir to, 'tis a consummation devoutly to be wish'd. To die, to sleep; to sleep: perchance to dream: ay, there's the rub; for in that sleep of death what dreams may come when we have shuffled off this mortal coil, must give us pause. There's the respect that makes calamity of so long a life";

    about.append(aboutlabel, aboutsect)
    content.append(about);
}

export default about;