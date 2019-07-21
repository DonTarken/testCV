"use strict";

var $aboutToggle = document.querySelector('#about-toggle');
var $resumeToggle = document.querySelector('#resume-toggle');
var $contactToggle = document.querySelector('#contact-toggle');
var $about = document.querySelector('.about');
var $resume = document.querySelector('.resume');
var $contact = document.querySelector('.contact');
$resume.classList.add('collapsed');
$contact.classList.add('collapsed');
history.replaceState(null, null, ' ');
colorMenu();

function animation() {
  $about.classList.toggle('collapsed');
  $resume.classList.add('collapsed');
  $contact.classList.add('collapsed');
  $test.classList.remove('test');
}

$aboutToggle.addEventListener('click', function () {
  if ($about.classList.contains('collapsed')) {
    $about.classList.toggle('collapsed');
    $resume.classList.add('collapsed');
    $contact.classList.add('collapsed');
    $test.classList.remove('test');
  }
});
$resumeToggle.addEventListener('click', function () {
  if ($resume.classList.contains('collapsed')) {
    $resume.classList.toggle('collapsed');
    $about.classList.add('collapsed');
    $contact.classList.add('collapsed');
    $test.classList.remove('test');
  }
});
$contactToggle.addEventListener('click', function () {
  if ($contact.classList.contains('collapsed')) {
    $contact.classList.toggle('collapsed');
    $resume.classList.add('collapsed');
    $about.classList.add('collapsed');
    $test.classList.remove('test');
  }
});
window.addEventListener("hashchange", colorMenu);

function colorMenu() {
  switch (window.location.hash) {
    case "#about":
      $aboutToggle.style.color = 'white';
      $resumeToggle.style.color = '';
      $contactToggle.style.color = '';
      break;

    case "#resume":
      $aboutToggle.style.color = '';
      $resumeToggle.style.color = 'white';
      $contactToggle.style.color = '';
      break;

    case "#contact":
      $aboutToggle.style.color = '';
      $resumeToggle.style.color = '';
      $contactToggle.style.color = 'white';
      break;

    default:
      $aboutToggle.style.color = 'white';
      $resumeToggle.style.color = '';
      $contactToggle.style.color = '';
  }
}

var $ham = document.querySelector('.menu_hamburger i img');
var $test = document.querySelector('.wrapper header');
$test.classList.remove('test');
$ham.addEventListener('click', function () {
  $test.classList.toggle('test');
});