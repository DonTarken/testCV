let $aboutToggle = document.querySelector('#about-toggle');
let $resumeToggle = document.querySelector('#resume-toggle');
let $contactToggle = document.querySelector('#contact-toggle');

let $about = document.querySelector('#about');
let $resume = document.querySelector('#resume');
let $contact = document.querySelector('#contact');


$resume.classList.add('collapsed');
$contact.classList.add('collapsed');

history.replaceState(null, null, ' ');
// window.location.hash = "";
// window.location.href.substr(0, window.location.href.indexOf('#'))
// window.location.href.split('#')[0]

colorMenu()

$aboutToggle.addEventListener('click', () => {
    if ($about.classList.contains('collapsed')) {
        $about.classList.toggle('collapsed');
        $resume.classList.add('collapsed');
        $contact.classList.add('collapsed');

    }
});
$resumeToggle.addEventListener('click', () => {
    if ($resume.classList.contains('collapsed')) {
        $resume.classList.toggle('collapsed');
        $about.classList.add('collapsed');
        $contact.classList.add('collapsed');
    }
});
$contactToggle.addEventListener('click', () => {
    if ($contact.classList.contains('collapsed')) {
        $contact.classList.toggle('collapsed');
        $resume.classList.add('collapsed');
        $about.classList.add('collapsed');
    }
});

window.addEventListener("hashchange", colorMenu);

function colorMenu(){
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
