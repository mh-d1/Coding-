import { state, saveState } from './state.js';
import { debounce } from './utils.js';

let previewFrame;

export function initPreviewFrame() {
    previewFrame = document.getElementById('previewFrame');
}

export function renderPreview() {
    const html = state.project.html || '';
    const css = state.project.css || '';
    let js = state.project.js || '';

    const captureScript = `
    (function() {
      const origLog = console.log;
      const origWarn = console.warn;
      const origError = console.error;
      console.log = function(...args) {
        origLog(...args);
        window.parent.postMessage({ type: 'console', level: 'info', message: args.map(a => String(a)).join(' ') }, '*');
      };
      console.warn = function(...args) {
        origWarn(...args);
        window.parent.postMessage({ type: 'console', level: 'warn', message: '⚠️ ' + args.map(a => String(a)).join(' ') }, '*');
      };
      console.error = function(...args) {
        origError(...args);
        window.parent.postMessage({ type: 'console', level: 'error', message: '❌ ' + args.map(a => String(a)).join(' ') }, '*');
      };
      window.onerror = function(msg, url, line, col, error) {
        window.parent.postMessage({ type: 'console', level: 'error', message: '❌ ' + msg + ' (line ' + line + ')' }, '*');
        return false;
      };
    })();
    `;
    js = captureScript + '\n' + js;

    const doc = `<!DOCTYPE html>
    <html>
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${css}</style></head>
    <body>${html}<script>${js}<\/script></body>
    </html>`;

    try {
        if (previewFrame) previewFrame.srcdoc = doc;
    } catch (_) {}
}

export function refreshPreview() {
    renderPreview();
}

export function setDeviceSize(size) {
    state.deviceSize = size;
    const widths = { desktop: '100%', tablet: '768px', mobile: '375px' };
    if (previewFrame) {
        previewFrame.style.width = widths[size] || '100%';
        previewFrame.style.maxWidth = size === 'desktop' ? '100%' : widths[size];
        previewFrame.style.margin = '0 auto';
        previewFrame.style.display = 'block';
    }
    document.querySelectorAll('.device-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.device === size);
    });
}

export const debouncedRenderPreview = debounce(renderPreview, 300);
