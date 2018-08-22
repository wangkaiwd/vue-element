(function (doc, win) {
  const html = document.documentElement;
  const setRem = () => {
    const { width } = html.getBoundingClientRect();
    if (!width) { return }
    html.style.fontSize = width / 7.5 + 'px';
  }
  win.addEventListener('resize', setRem)
  doc.addEventListener('DOMContentLoaded', setRem)
}(document, window))