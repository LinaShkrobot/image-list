import { observer } from '../observer';

export class List {
  constructor(node, api) {
    this.node = node;
    this.api = api;
    observer.on('fileUploaded', this.updateList);
    this.node.addEventListener('click', (e) => {
      const fileName = e.target.textContent;
      observer.fire('listClick', fileName);
    });
    this.updateList();
  }

  updateList = () => {
    this.api.getList().then((list) => {
      this.renderList(list);
    });
  };

  renderList = (list) => {
    this.node.innerHTML = '';
    list.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      this.node.appendChild(listItem);
    });
  };

  // getList = () => {
  //   return fetch('http://localhost:3000/images').then((r) => r.json());
  // };
}
