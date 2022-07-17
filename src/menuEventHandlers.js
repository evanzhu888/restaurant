const menuEventHandlers = () => {
    let regular = document.querySelector(".regular");
    let spicy = document.querySelector(".spicy");
    let dumplings = document.querySelector(".dumplings");
    let edamame = document.querySelector(".edamame");

    regular.addEventListener("mouseenter", () => {
        regular.innerHTML = "";
        let rcontent = document.createElement("div");
        rcontent.classList.add("rclick");
        rcontent.innerText = "Regular Tonkatsu Ramen: $12"
        rcontent.style.background = "rgba(40, 40, 40, 0.8)";
        regular.append(rcontent);
    });

    regular.addEventListener("mouseleave", () => {
        regular.innerHTML = "";
        let reg = document.createElement("div");
        reg.classList.add("regular");
        regular.append(reg);
    })

    spicy.addEventListener("mouseenter", () => {
        spicy.innerHTML = "";
        let rcontent = document.createElement("div");
        rcontent.classList.add("rclick");
        rcontent.innerText = "Spicy Tonkatsu Ramen: $13"
        rcontent.style.background = "rgba(40, 40, 40, 0.8)";
        spicy.append(rcontent);
    });

    spicy.addEventListener("mouseleave", () => {
        spicy.innerHTML = "";
        let reg = document.createElement("div");
        reg.classList.add("spicy");
        spicy.append(reg);
    })

    edamame.addEventListener("mouseenter", () => {
        edamame.innerHTML = "";
        let rcontent = document.createElement("div");
        rcontent.classList.add("rclick");
        rcontent.innerText = "Edamame: $6"
        rcontent.style.background = "rgba(40, 40, 40, 0.8)";
        edamame.append(rcontent);
    });

    edamame.addEventListener("mouseleave", () => {
        edamame.innerHTML = "";
        let reg = document.createElement("div");
        reg.classList.add("edamame");
        edamame.append(reg);
    })

    dumplings.addEventListener("mouseenter", () => {
        dumplings.innerHTML = "";
        let rcontent = document.createElement("div");
        rcontent.classList.add("rclick");
        rcontent.innerText = "Dumplings: $7"
        rcontent.style.background = "rgba(40, 40, 40, 0.8)";
        dumplings.append(rcontent);
    });

    dumplings.addEventListener("mouseleave", () => {
        dumplings.innerHTML = "";
        let reg = document.createElement("div");
        reg.classList.add("dumplings");
        dumplings.append(reg);
    })



}

export default menuEventHandlers