import { state, loadState, saveState } from './state.js';
import { setTheme } from './themes.js';
import { initPreviewFrame, renderPreview, setDeviceSize, refreshPreview } from './preview.js';
import { initProEditor, loadFile, saveProCode } from './editor.js';
import { initPro } from './pro.js';
import { getProject } from './utils.js';

const app = document.getElementById('app');
const resetProjectBtn = document.getElementById('resetProjectBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileTabs = document.getElementById('mobileTabs');

let editorInstance = null;

function resetProject() {
    if (!confirm('Reset the current project to its default state?')) return;
    const proj = getProject(state.currentProject);
    state.project.html = proj.html;
    state.project.css = proj.css;
    state.project.js = proj.js;
    loadFile(state.currentFile);
    renderPreview();
    saveState();
}

function updateMobileView() {
    const isMobile = window.innerWidth <= 640;
    mobileNav.style.display = isMobile ? 'block' : 'none';
    if (!isMobile) {
        document.querySelector('.pro-editor-area').style.display = 'flex';
        document.querySelector('.pro-preview-area').style.display = 'flex';
        document.querySelector('.console-panel').style.display = 'flex';
        return;
    }
    const view = state.editorView || 'code';
    if (view === 'code') {
        document.querySelector('.pro-editor-area').style.display = 'flex';
        document.querySelector('.pro-preview-area').style.display = 'none';
        document.querySelector('.console-panel').style.display = 'none';
    } else {
        document.querySelector('.pro-editor-area').style.display = 'none';
        document.querySelector('.pro-preview-area').style.display = 'flex';
        document.querySelector('.console-panel').style.display = 'flex';
    }
    mobileTabs.querySelectorAll('button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
}

function initResizeHandle() {
    const handle = document.getElementById('resizeHandle');
    const proEditor = document.querySelector('.pro-editor-area');
    const proPreview = document.querySelector('.pro-preview-area');
    let active = false,
        startX, startWidth;

    function onStart(e) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        active = true;
        startX = clientX;
        startWidth = proEditor.offsetWidth;
        handle.classList.add('active');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    }

    function onMove(e) {
        if (!active) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const container = document.querySelector('.app-main');
        const rect = container.getBoundingClientRect();
        const newWidth = clientX - rect.left;
        const total = rect.width;
        const pct = Math.max(15, Math.min(85, (newWidth / total) * 100));
        proEditor.style.flex = `0 0 ${pct}%`;
        proPreview.style.flex = `0 0 ${100 - pct}%`;
    }

    function onEnd() {
        active = false;
        handle.classList.remove('active');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }

    handle.addEventListener('mousedown', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    handle.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('touchend', onEnd, { passive: true });
}

function init() {
    const hasState = loadState();
    setTheme(state.theme);

    const proj = getProject(state.currentProject || 'starter');
    if (!state.project.html || !hasState) {
        state.project.html = proj.html;
        state.project.css = proj.css;
        state.project.js = proj.js;
    }

    initPreviewFrame();
    renderPreview();
    setDeviceSize(state.deviceSize || 'desktop');

    // Init editor
    editorInstance = initProEditor();
    window.editorInstance = editorInstance;

    // Init pro features
    initPro();

    // Theme selector
    document.querySelectorAll('.theme-dot').forEach(el => {
        el.addEventListener('click', () => setTheme(el.dataset.theme));
    });

    // Reset project
    resetProjectBtn.addEventListener('click', resetProject);

    // Device buttons
    document.querySelectorAll('.device-btn').forEach(btn => {
        btn.addEventListener('click', () => setDeviceSize(btn.dataset.device));
    });

    // Resize handle
    initResizeHandle();

    // Mobile nav
    mobileTabs.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            state.editorView = btn.dataset.view;
            updateMobileView();
        });
    });
    window.addEventListener('resize', updateMobileView);
    updateMobileView();

    // Save state periodically
    setInterval(saveState, 5000);

    console.log('CodeForge Pro initialized.');
}

document.addEventListener('DOMContentLoaded', init);
