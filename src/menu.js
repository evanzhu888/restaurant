import menuEventHandlers from "./menuEventHandlers";

const menu = () => {

    let content = document.getElementById("content");
    let menu = document.createElement("div");
    content.innerHTML = "";
    menu.classList.add("menu");
    menu.style.background = "rgba(40, 40, 40, 0.8)";

    let regular = document.createElement("div");
    regular.classList.add("regular");

    let spicy = document.createElement("div");
    spicy.classList.add("spicy");

    let dumplings = document.createElement("div");
    dumplings.classList.add("dumplings");

    let edamame = document.createElement("div");
    edamame.classList.add("edamame");

    menu.append(regular, spicy, dumplings, edamame);
    content.append(menu);

    menuEventHandlers();
}

export default menu;