import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/main.css';
import holbertonLogo from '../assets/holberton-logo.jpg';

$('body').append(`<img src="${holbertonLogo}" id="logo" />`);
$('body').append('<div id="app"></div>');
$('#app').append('<div>Dashboard data</div>');

let count = 0;
const debouncedUpdateCounter = debounce(() => {
  count += 1;
  $('#app').append(`<p class="text-red">Total: ${count}</p>`);
}, 500);

$('body').append('<button id="update_btn">Click here to update counter</button>');
$('#update_btn').on('click', debouncedUpdateCounter);
