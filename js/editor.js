import { state, saveState } from './state.js';
import { debouncedRenderPreview } from './preview.js';

let editorInstance = null;

export function initProEditor() {
    const codeEditor = document.getElementById('codeEditor');
    if (editorInstance) {
        editorInstance.toTextArea();
        editorInstance = null;
    }
    if (typeof CodeMirror !== 'undefined') {
        try {
            editorInstance = CodeMirror.fromTextArea(codeEditor, {
                mode: getEditorMode(state.currentFile),
                theme: 'dracula',
                lineNumbers: true,
                autoCloseTags: true,
                autoCloseBrackets: true,
                indentUnit: 2,
                tabSize: 2,
                lineWrapping: false,
                extraKeys: {
                    'Ctrl-S': () => { saveProCode();
                        debouncedRenderPreview(); },
                    'Cmd-S': () => { saveProCode();
                        debouncedRenderPreview(); },
                    'Ctrl-Enter': () => { debouncedRenderPreview(); },
                    'Cmd-Enter': () => { debouncedRenderPreview(); },
                }
            });
            const content = getFileContent(state.currentFile);
            editorInstance.setValue(content);
            editorInstance.on('change', () => {
                saveProCode();
                debouncedRenderPreview();
            });
            return editorInstance;
        } catch (_) {
            useTextareaEditor();
        }
    } else {
        useTextareaEditor();
    }
}

function useTextareaEditor() {
    const codeEditor = document.getElementById('codeEditor');
    codeEditor.style.display = 'block';
    const content = getFileContent(state.currentFile);
    codeEditor.value = content;
    codeEditor.addEventListener('input', () => {
        saveProCode();
        debouncedRenderPreview();
    });
    codeEditor.style.fontFamily = 'var(--font-mono)';
    codeEditor.style.fontSize = '13px';
    codeEditor.style.background = 'var(--surface)';
    codeEditor.style.color = 'var(--text)';
    codeEditor.style.border = 'none';
    codeEditor.style.padding = '8px';
    codeEditor.style.resize = 'none';
    codeEditor.style.outline = 'none';
    codeEditor.style.tabSize = '2';
    codeEditor.style.width = '100%';
    codeEditor.style.height = '100%';
}

function getEditorMode(file) {
    if (file.endsWith('.html')) return 'xml';
    if (file.endsWith('.css')) return 'css';
    if (file.endsWith('.js')) return 'javascript';
    return 'xml';
}

function getFileContent(file) {
    if (file === 'index.html') return state.project.html || '';
    if (file === 'style.css') return state.project.css || '';
    if (file === 'script.js') return state.project.js || '';
    return '';
}

function setFileContent(file, content) {
    if (file === 'index.html') state.project.html = content;
    else if (file === 'style.css') state.project.css = content;
    else if (file === 'script.js') state.project.js = content;
}

export function saveProCode() {
    if (editorInstance) {
        const content = editorInstance.getValue();
        setFileContent(state.currentFile, content);
    } else {
        const codeEditor = document.getElementById('codeEditor');
        const content = codeEditor.value;
        setFileContent(state.currentFile, content);
    }
    saveState();
}

export function loadFile(file) {
    state.currentFile = file;
    const content = getFileContent(file);
    if (editorInstance) {
        editorInstance.setValue(content);
        editorInstance.setOption('mode', getEditorMode(file));
    } else {
        document.getElementById('codeEditor').value = content;
    }
    renderProTabs();
}

function renderProTabs() {
    document.querySelectorAll('#editorTabs .tab').forEach(tab => {
        const file = tab.dataset.file;
        tab.classList.toggle('active', file === state.currentFile);
    });
}

export function getEditorInstance() {
    return editorInstance;
}
