
const doSaveChanges = function (event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const birthMonth = document.getElementById('birthMonth').value;
    const birthYear = document.getElementById('birthYear').value

    updateUser({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        birthMonth: parseInt(birthMonth),
        birthYear: parseInt(birthYear)
    })
        window.location.href = '../journal/journal.html';
};

const clearForm = () => {
    document.getElementById('firstName').value = ''; 
    document.getElementById('lastName').value = ''; 
    document.getElementById('userName').value = ''; 
    document.getElementById('password').value = '';
    document.getElementById('birthMonth').value = '';
    document.getElementById('birthYear').value = ''
};


