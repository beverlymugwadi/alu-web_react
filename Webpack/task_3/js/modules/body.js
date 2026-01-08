import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/body.css';

$('body').append('<main>');
$('main').append('<p>Dashboard data for the students</p>');
$('main').append('<button id="update_btn">Click here to update counter</button>');

let count = 0;
const debouncedUpdateCounter = debounce(() => {
  count += 1;
  $('main').append(`<p class="text-red">Total: ${count}</p>`);
}, 500);

$('#update_btn').on('click', debouncedUpdateCounter);
