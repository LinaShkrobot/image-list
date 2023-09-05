import { observer } from '../observer';
import { imagePathResolve } from '../utils';

export class MainImage {
  constructor(node, api) {
    this.node = node;
    this.api = api;
    observer.on('listClick', this.renderImage);
  }

  renderImage = (fileName) => {
    this.node.src = imagePathResolve(fileName);
  };
}
