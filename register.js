const btn = document.querySelector('.btn')
const fullName = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#pass')
const passConfirm = document.querySelector('#passConfirm')
const alert = document.querySelector('main .p')

const read = (e) => {
    e.preventDefault()
    saveStorage()
}

const saveStorage = () => {
    const localStorageData = localStorage.getItem('data')
    let data
    if (localStorageData === null) {
        data = []
    } else {
        data = JSON.parse(localStorageData)
    }
    if (fullName.value != '' && email.value != '' && password.value != '' && passConfirm.value != '' && password.value == passConfirm.value) {
        let user = {
            nameUser: fullName.value,
            emailUser: email.value,
            passwordUser: password.value
        }
        data.push(user)
        alert.innerHTML = `<i class="fas fa-exclamation-circle"></i> dodano!`
        alert.style.color = 'green'
    } else {
        alert.innerHTML = `<i class="fas fa-exclamation-triangle"></i> złe dane!`
        alert.style.color = 'red'
    }
    localStorage.setItem('data', JSON.stringify(data))
    fullName.value = '';
    email.value = '';
    password.value = '';
    passConfirm.value = ''
}

btn.addEventListener('click', read)