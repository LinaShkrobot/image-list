// const files = [];
// const downloadText = document.querySelector('.form_text');
// const uploadForm = document.querySelector('.uploadForm');
// const sidebarList = document.querySelector('.sidebar_list');
// const imageDisplay = document.querySelector('.imageDisplay');
// const downloadForm = document.querySelector('.downloadForm');

// function renderList() {
//   const listItem = document.createElement('li');
//   listItem.setAttribute('name', `${files.length - 1}`);
//   listItem.textContent = files[files.length - 1].name;
//   sidebarList.appendChild(listItem);
// }

// sidebarList.addEventListener('click', (e) => {
//   const key = e.target.getAttribute('name');
//   renderImage(files[key]);
//   downloadText.value = e.target.textContent
// })

// uploadForm.addEventListener('submit', (e) => {
//   e.preventDefault();
// //  console.log(e.target.sampleFile.files[0]);
//   files.push(e.target.sampleFile.files[0]);
//   // console.log(files);
//   renderList();
// });

// downloadForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log(downloadText.value);
//   const file = files.find(item => item.name === downloadText.value);
//   if (file) {
//     downloadImage(file);
//   }
// });

// function renderImage(file) {
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function(e) {
//       imageDisplay.src = e.target.result;
//     }
//     reader.readAsDataURL(file);
//   }
// }

// function downloadImage(file) {
//   console.log(file)
//  if (file) {
//     const url = URL.createObjectURL(file);
//    const link = document.createElement('a');
//     link.href = url;
//     link.download = file.name;
//     link.click();
//     URL.revokeObjectURL(url);
//   }
// }
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
