import { state, saveState } from './state.js';
import { getProject } from './utils.js';
import { loadFile, saveProCode } from './editor.js';
import { renderPreview, refreshPreview } from './preview.js';

let consoleBody;

export function initPro() {
    consoleBody = document.getElementById('consoleBody');

    // Project selector
    document.getElementById('projectSelector').addEventListener('change', (e) => {
        loadProject(e.target.value);
    });

    // Run button
    document.getElementById('runBtn').addEventListener('click', () => {
        saveProCode();
        renderPreview();
        addConsoleLog('info', '▶️ Run triggered.');
    });

    // Console clear
    document.getElementById('consoleClear').addEventListener('click', () => {
        consoleBody.innerHTML = '';
        addConsoleLog('info', 'Console cleared.');
    });

    // Tab switching
    document.querySelectorAll('#editorTabs .tab').forEach(tab => {
        tab.addEventListener('click', () => {
            loadFile(tab.dataset.file);
        });
    });

    // Refresh preview
    document.getElementById('refreshPreviewBtn').addEventListener('click', refreshPreview);

    // Fullscreen
    document.getElementById('fullscreenPreviewBtn').addEventListener('click', toggleFullscreen);

    // Load initial project
    loadProject(state.currentProject || 'starter');

    // Listen for console messages from iframe
    window.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'console') {
            const { level, message } = e.data;
            addConsoleLog(level, message);
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            saveProCode();
            renderPreview();
            addConsoleLog('info', '▶️ Run triggered (Ctrl+Enter).');
        }
    });
}

function addConsoleLog(level, message) {
    if (!consoleBody) return;
    const entry = document.createElement('div');
    entry.className = `log-entry ${level}`;
    const time = new Date().toLocaleTimeString();
    entry.innerHTML = `<span class="log-time">${time}</span> ${message}`;
    consoleBody.appendChild(entry);
    consoleBody.scrollTop = consoleBody.scrollHeight;
    while (consoleBody.children.length > 100) {
        consoleBody.removeChild(consoleBody.firstChild);
    }
}

function loadProject(name) {
    state.currentProject = name;
    const proj = getProject(name);
    state.project.html = proj.html;
    state.project.css = proj.css;
    state.project.js = proj.js;
    document.getElementById('projectSelector').value = name;
    loadFile(state.currentFile);
    renderPreview();
    saveState();
}

function toggleFullscreen() {
    const wrap = document.getElementById('previewWrap');
    if (!wrap) return;
    if (!document.fullscreenElement) {
        wrap.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen().catch(() => {});
    }
}
