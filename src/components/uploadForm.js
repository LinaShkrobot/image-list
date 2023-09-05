import { observer } from '../observer';

export class UploadForm {
  constructor(node, api) {
    this.node = node;
    this.api = api;
    this.node.addEventListener('submit', (e) => {
      e.preventDefault();
      const file = e.target.sampleFile.files[0];
      this.api.uploadFile(file).then((r) => {
        observer.fire('fileUploaded');
      });
    });
  }
}
