const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit',handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    
    if (email.value === '' || password.value === '') {
        return alert('Please fill the fields with your information!')
    }
    const userData = { email: email.value, Password: password.value }

    console.log(userData);
    event.currentTarget.reset()
}

