import project from './project';

export default function sidebarInit() {
    const projects = document.querySelector('.projects');

    const newProjBtn = document.querySelector('.create-new-project');
    
    newProjBtn.addEventListener('click', () => {
        newProjBtn.classList.add('clicked');
        const textBox = document.createElement('input');
        textBox.addEventListener('keydown', (event) => {
            if(event.key === 'Enter'){
                
            }
        });
        projects.appendChild(textBox);
    });
}