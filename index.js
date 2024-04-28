const DarkModeCheckbox = document.querySelector('#darkmode')
// lightmode
const contDarkModeCheckbox = document.querySelector('#lightmode')
const cont = document.querySelector('cont')



DarkModecheCkbox.addEventListener('change',(e) => {
console.log('DarkModeCheckbox.checked');
})
contDarkModecheCkbox.addEventListener('change',(e) => {
    console.log('contDarkModeCheckbox.checked');
    })




const fullDarkModeCheckbox = document.querySelector('#full-dark-mode')
const containedDarkModeCheckbox = document.querySelector('#contained-dark-mode')
const container = document.querySelector('.container')

const isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckbox'))
const isContainedDarkMode = JSON.parse(
  localStorage.getItem('containedDarkModeCheckbox')
)

if (isFullDarkMode) {
  fullDarkModeCheckbox.checked = true
}
if (isContainedDarkMode) {
  containedDarkModeCheckbox.checked = true
}

changeFullDarkMode()
changeContainedDarkMode()

fullDarkModeCheckbox.addEventListener('change', () => {
  changeFullDarkMode()
  changeContainedDarkMode()
})

function changeFullDarkMode() {
  changeTheme(fullDarkModeCheckbox, document.body, 'fullDarkModeCheckbox')
}

function changeContainedDarkMode() {
  changeTheme(containedDarkModeCheckbox, container, 'containedDarkModeCheckbox')
}

function changeTheme(checkbox, element, localStorageKey) {
  if (checkbox.checked) {
    element.classList.add('dark')
    localStorage.setItem(localStorageKey, true)
  } else {
    element.classList.remove('dark')
    localStorage.setItem(localStorageKey, false)
  }
}

containedDarkModeCheckbox.addEventListener('change', changeContainedDarkMode)