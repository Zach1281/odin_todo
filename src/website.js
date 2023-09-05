import './style.css';

export default function component() {
    const main = document.querySelector('.content');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Todo App"

    main.appendChild(title);

    return main;
}