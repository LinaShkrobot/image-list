class UploadForm {
  constructor(node) {
    this.node = node;
  this.node.addEventListener('submit', (e) => {
    e.preventDefault();
    const file = e.target.sampleFile.files[0];
    state.images[file.name] = file;
    observer.fire('submitClick', file.name);
  });
 }
}