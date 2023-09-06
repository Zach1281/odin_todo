import './style.css';
import sidebar from './sidebar';

export default function siteInit() {
    const main = document.querySelector('.content');
    sidebar();
    return main;
}