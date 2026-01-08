import $ from 'jquery';
import { debounce } from 'lodash';

$('body').append('<div id="logo"></div>');
$('body').append('<div id="app"></div>');
$('#app').append('<div>Dashboard data</div>');

let count = 0;
const debouncedUpdateCounter = debounce(() => {
  count += 1;
  $('#app').append(`<p>Total: ${count}</p>`);
}, 500);

$('body').append('<button id="update_btn">Click here to update counter</button>');
$('#update_btn').on('click', debouncedUpdateCounter);
