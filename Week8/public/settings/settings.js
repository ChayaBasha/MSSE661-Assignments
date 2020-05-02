const getFormValues = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const birthMonth = document.getElementById('birthMonth').value;
    const birthYear = document.getElementById('birthYear').value
    return { firstName, lastName, userName, password, birthMonth, birthYear };
};

const validate = () => {
    const { firstName, lastName, userName, password, birthMonth, birthYear } = getFormValues();

    const newUserDetails = {};

    if (firstName !== '') {
        newUserDetails.firstName = firstName;
    } if (lastName !== '') {
        newUserDetails.lastName = lastName;
    } if (birthMonth !== '') {
        newUserDetails.birthMonth = birthMonth;
    } if (birthYear !== '') {
        newUserDetails.birthYear = birthYear;
    } if (userName !== '') {
        newUserDetails.userName = userName;
    } if (password !== '') {
        newUserDetails.password = password;
    }

    if (Object.getOwnPropertyNames(newUserDetails).length === 0) {
        alert('no information to change')
    };
    return newUserDetails;

};


const doUpdateJournalEntry = function (event) {
    event.preventDefault();
    const updates = validate();
    if (Object.getOwnPropertyNames(updates).length !== 0)  {
        updateUser(updates);
        window.location.href = '../journal/journal.html';
    } else {
        alert('nothing to update')
    }

};

const clearForm = () => {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('userName').value = '';
    document.getElementById('password').value = '';
    document.getElementById('birthMonth').value = '';
    document.getElementById('birthYear').value = ''
};


