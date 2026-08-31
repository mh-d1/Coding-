import { PROJECTS } from './projects.js';

export function debounce(fn, ms) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), ms);
    };
}
export function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
}
export function getProject(name) {
    return PROJECTS[name] || PROJECTS.starter;
}
