let $aboutToggle = document.querySelector('#about-toggle');
let $resumeToggle = document.querySelector('#resume-toggle');
let $contactToggle = document.querySelector('#contact-toggle');

let $about = document.querySelector('#about');
let $resume = document.querySelector('#resume');
let $contact = document.querySelector('#contact');


$resume.classList.add('collapsed');
$contact.classList.add('collapsed');

history.replaceState(null, null, ' ');
colorMenu()
function animation(){
    if ($about.classList.contains('collapsed')) {
        $about.classList.toggle('collapsed');
        $resume.classList.add('collapsed');
        $contact.classList.add('collapsed');
        $test.className = '';
    }
}
$aboutToggle.addEventListener('click', () => {
    if ($about.classList.contains('collapsed')) {
        $about.classList.toggle('collapsed');
        $resume.classList.add('collapsed');
        $contact.classList.add('collapsed');
        $test.className = '';
    }
});
$resumeToggle.addEventListener('click', () => {
    if ($resume.classList.contains('collapsed')) {
        $resume.classList.toggle('collapsed');
        $about.classList.add('collapsed');
        $contact.classList.add('collapsed');
        $test.className = '';
    }
});
$contactToggle.addEventListener('click', () => {
    if ($contact.classList.contains('collapsed')) {
        $contact.classList.toggle('collapsed');
        $resume.classList.add('collapsed');
        $about.classList.add('collapsed');
        $test.className = '';
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

let $ham = document.querySelector('.menu_hamburger i img');
let $test = document.querySelector('.wrapper header');
$test.className = '';
$ham.addEventListener('click', ()=>{
    $test.classList.toggle('test');
})
