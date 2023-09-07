import './style.css';
import sidebar from './events';

export default function siteInit() {
    const main = document.querySelector('.content');
    sidebar();
    return main;
}