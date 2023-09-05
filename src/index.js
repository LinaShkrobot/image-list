import { List } from './components/list';
import { MainImage } from './components/mainImage';
import { UploadForm } from './components/uploadForm';
import { DownloadForm } from './components/downloadForm';
import { Api } from './api';

const listNode = document.querySelector('.sidebar_list');
const imageNode = document.querySelector('.imageDisplay');
const uploadNode = document.querySelector('.uploadForm');
const downloadNode = document.querySelector('.downloadForm');

const api = new Api();

new List(listNode, api);
new MainImage(imageNode, api);
new UploadForm(uploadNode, api);
new DownloadForm(downloadNode, api);
