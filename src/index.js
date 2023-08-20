const state = {
  images: {},
};

(function () {
  const listNode = document.querySelector('.sidebar_list');
  const imageNode = document.querySelector('.imageDisplay');
  const uploadNode = document.querySelector('.uploadForm');
  const downloadNode = document.querySelector('.downloadForm');

  new List(listNode);
  new Image(imageNode);
  new UploadForm(uploadNode);
  new DownloadForm(downloadNode);
})();
