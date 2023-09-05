export class Api {
  constructor() {
    this.BaseUrl = 'http://localhost:3000/';
  }

  request(options) {
    return fetch(`${this.BaseUrl}${options.path}`, {
      method: options.method,
      body: options.body,
    }).then((r) =>
      r[options.returnType]()
    );
  }

  // getList() {
  //   return fetch(`${this.BaseUrl}/images`).then((r) => r.json());
  // }

  getList() {
    return this.request({
      path:'images',
      returnType:'json',
    });
  };


  // uploadFile = (file) => {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   return fetch(`${this.BaseUrl}/images/upload`, {
  //     method: 'POST',
  //     body: formData,
  //   }).then((r) => r.text());
  // };

  uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return this.request({
      method: 'POST',
      body: formData,
      returnType: 'text',
      path: 'images/upload',
    });
  };

  // downloadImage = (fileName) => {
  //   return fetch(`${this.BaseUrl}/images/${fileName}`).then((r) => r.blob());
  // };

  downloadImage = (fileName) => {
    return this.request({
      path:`images/${fileName}`,
      returnType:'blob',
    });
  };  
}
