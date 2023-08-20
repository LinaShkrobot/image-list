class DownloadForm {
  constructor(node) {
    this.node = node;
    this.input = node.querySelector('.form_text');
    this.node.addEventListener('submit', (e) => {
      e.preventDefault();
      const file = state.images[this.input.value];
      if (file) {
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        link.click();
        URL.revokeObjectURL(url);
      }
    });

    observer.on('listClick', this.changeText);
  }

  changeText = (fileName) => {
    this.input.value = fileName;
  };
}
