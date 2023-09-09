import './style.css';
import sidebar from './sidebar';
import todoPanel from './todoPanel';

export default function siteInit() {
    const main = document.querySelector('.content');
    sidebar();
    todoPanel();
    return main;
}