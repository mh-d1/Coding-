import { state, loadState, saveState } from './state.js';
import { setTheme } from './themes.js';
import { initPreviewFrame, renderPreview, setDeviceSize, refreshPreview } from './preview.js';
import { initProEditor, loadFile, saveProCode } from './editor.js';
import { initPro } from './pro.js';
import { getProject } from './utils.js';

const resetBtn = document.getElementById('resetProjectBtn');
const mobileTabs = document.getElementById('mobileTabs');

function resetProject() {
    if (!confirm('Reset to default?')) return;
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
    const nav = document.getElementById('mobileNav');
    nav.style.display = isMobile ? 'block' : 'none';

    const editor = document.querySelector('.pro-editor-area');
    const preview = document.querySelector('.pro-preview-area');

    if (isMobile) {
        const view = state.editorView || 'code';
        editor.style.display = view === 'code' ? 'flex' : 'none';
        preview.style.display = view === 'preview' ? 'flex' : 'none';
        preview.classList.toggle('visible', view === 'preview');
        mobileTabs.querySelectorAll('button').forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });
    } else {
        editor.style.display = 'flex';
        preview.style.display = 'flex';
        preview.classList.add('visible');
    }
}

function initResizeHandle() {
    const handle = document.getElementById('resizeHandle');
    const editor = document.querySelector('.pro-editor-area');
    const preview = document.querySelector('.pro-preview-area');
    let active = false,
        startX, startW;

    const onStart = (e) => {
        if (window.innerWidth <= 640) return;
        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        active = true;
        startX = cx;
        startW = editor.offsetWidth;
        handle.classList.add('active');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    };
    const onMove = (e) => {
        if (!active) return;
        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        const container = document.querySelector('.app-main');
        const rect = container.getBoundingClientRect();
        const total = rect.width;
        const pct = Math.max(15, Math.min(85, ((cx - rect.left) / total) * 100));
        editor.style.flex = `0 0 ${pct}%`;
        preview.style.flex = `0 0 ${100 - pct}%`;
    };
    const onEnd = () => {
        active = false;
        handle.classList.remove('active');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    };

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

    window.editorInstance = initProEditor();
    initPro();

    // Theme dots
    document.querySelectorAll('.theme-dot').forEach((el) => {
        el.addEventListener('click', () => setTheme(el.dataset.theme));
    });

    resetBtn.addEventListener('click', resetProject);

    // Device buttons
    document.querySelectorAll('.device-btn').forEach((btn) => {
        btn.addEventListener('click', () => setDeviceSize(btn.dataset.device));
    });

    initResizeHandle();

    // Mobile tabs
    mobileTabs.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
            state.editorView = btn.dataset.view;
            updateMobileView();
        });
    });
    window.addEventListener('resize', updateMobileView);
    updateMobileView();

    setInterval(saveState, 5000);
    console.log('🚀 CodeForge Pro ready.');
}

document.addEventListener('DOMContentLoaded', init);
