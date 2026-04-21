export function fmt(s) {
    return String(Math.floor(s / 3600)).padStart(2, '0') + ':' +
           String(Math.floor((s % 3600) / 60)).padStart(2, '0') + ':' +
           String(s % 60).padStart(2, '0');
}

export function fmtMm(s) {
    return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}

export function toast(m, t) {
    let e = document.createElement('div');
    e.className = 'toast ' + (t || 'ok');
    e.textContent = m;
    document.body.appendChild(e);
    requestAnimationFrame(() => {
        requestAnimationFrame(() => e.classList.add('show'));
    });
    setTimeout(() => {
        e.classList.remove('show');
        setTimeout(() => e.remove(), 300);
    }, 2400);
}