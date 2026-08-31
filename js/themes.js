import { state, saveState } from './state.js';

export function setTheme(name) {
    state.theme = name;
    document.getElementById('app').dataset.theme = name;
    document.querySelectorAll('.theme-dot').forEach(el => {
        el.classList.toggle('active', el.dataset.theme === name);
    });
    saveState();
}
