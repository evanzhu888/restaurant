const home = () => {
    let content = document.getElementById("content");
    let main = document.createElement("div");
    main.classList.add("main");
    main.style.background = "rgba(40, 40, 40, 0.8)";

    let name = document.createElement("name");
    name.classList.add("name");
    name.innerText = "Evan's Ramen";

    let hour = document.createElement("div");
    hour.classList.add("hours");

    let tues = document.createElement("div");
    tues.innerText = "TUESDAY - SUNDAY";

    let am = document.createElement("div");
    am.innerText = "11AM - 10PM";

    hour.append(tues, am);
    main.append(name, hour);
    content.append(main);
    /*
    main.classList.add("name");
    main.innerText = "Evan's Ramen";

    let hour = document.createElement("div");
    hour.classList.add("hours");
    let tues = document.createElement("div");
    tues.innerText = "TUESDAY - SUNDAY";
    let am = document.createElement("div");
    tues.innerText = "11AM - 10PM";
    hour.append(tues, am);
    content.append(main, hour);
*/
}

export default home;