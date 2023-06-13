
// javascript
console.log(
    '¯\\_(ツ)_/¯\n',
    'nothing to see here except probably some javascript deprecation messages\n',
    'and stupid easter egg console.log() printouts.\n\n',
    'seriously, dont you have something better to do?\n\n\n\n',
    'lets go caps; fuck the penguins.'
)
lookup = {
    linkedin: 'https://linkedin.com/in/peterchristianfraedrich',
    medium: 'https://medium.com/@peterfraedrich',
    github: 'https://github.com/peterfraedrich',
    twitter: 'https://twitter.com/peter_fraedrich'
}

var windowMin = function () {
    elems = document.getElementsByClassName('not-title')
    for (e of elems) {
        e.classList.add('d-none')
    }
}

var windowMax = function () {
    elems = document.getElementsByClassName('not-title')
    for (e of elems) {
        e.classList.remove('d-none')
    }
}

var windowClose = function () {
    e = document.getElementById('main')
    e.classList.add('d-none')
}

var windowOpen = function () {
    e = document.getElementById('main')
    e.classList.remove('d-none')
}

var navigate = function (elem, dest) {
    window.open(lookup[dest], '_blank').focus();
}