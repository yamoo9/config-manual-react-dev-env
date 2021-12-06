export const settings = {
  clickDocumentReloadBrowser() {
    document.addEventListener('click', () => window.location.reload());
  },
  setDocumentTitle(newTitle) {
    document.title = newTitle;
  },
};
