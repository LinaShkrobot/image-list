import { observer } from '../observer';

export class DownloadForm {
  constructor(node, api) {
    this.node = node;
    this.api = api;
    this.input = node.querySelector('.form_text');
    this.node.addEventListener('submit', (e) => {
      e.preventDefault();
      const fileName = this.input.value;
      this.api.downloadImage(fileName)
      .then(file => {
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        link.click();
        URL.revokeObjectURL(url);
      })
    })

     observer.on('listClick', this.changeText);
  }

  changeText = (fileName) => {
    this.input.value = fileName;
  }
}
