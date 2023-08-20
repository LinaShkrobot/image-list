class List {
  constructor(node) {
    this.node = node;
    observer.on('submitClick', this.renderList);
    this.node.addEventListener('click', (e) => {
      const fileName = e.target.textContent;
      observer.fire('listClick', fileName);
    });
  }

  renderList = (fileName) => {
    const listItem = document.createElement('li');
    listItem.textContent = fileName;
    this.node.appendChild(listItem);
  };
}
