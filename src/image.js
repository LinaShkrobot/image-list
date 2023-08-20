class Image {
  constructor(node) {
    this.node = node;
    observer.on('listClick', this.renderImage);
  }

  renderImage = (fileName) => {
    const file = state.images[fileName];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.node.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
}
