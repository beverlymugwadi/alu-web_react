import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<main>');
$('main').append('<p>Dashboard data for the students</p>');
$('main').append('<button id="start-button">Click here to get started</button>');

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('main').append('<p id="count"></p>');

$('#start-button').on('click', _.debounce(updateCounter, 500));
