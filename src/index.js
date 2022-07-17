import './style.css';
import home from './home';
import menu from './menu';
import about from './about';

home();

const logic = (() => {
    const house = document.getElementById("home");
    const m = document.getElementById("menu");
    const content = document.getElementById("content");
    const a = document.getElementById("about");

    const clear = () => {
        content.innerHTML = "";
    }
    const addButtonFunctionality = () => {
        house.addEventListener("click", () => {
            clear();
            home();
        })
        m.addEventListener("click", () => {
            clear();
            menu();
        })
        a.addEventListener("click", () => {
            clear();
            about();
        })
    }

    return {
        addButtonFunctionality
    };
})();

logic.addButtonFunctionality();