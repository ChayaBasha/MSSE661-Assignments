
class User {
    firstName;
    lastName;
    userName;
    password;
    birthMonth;
    birthYear;

    constructor(firstName, lastName, userName, password, birthMonth, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;
    }
};

//users with different variables to test
userOne = new User('Jessica', 'Adams', 'JAdams', '123456', 9, 1986); 

userTwo = new User ('Johanna', 'Blumenthal', 'JBlumenthal','abcdef', 10, 1988);

userThree = new User ('Saul', 'Kent', 'Skent', 'password', 3, 1935);//test for same month 

userFour = new User ('Rudolph', 'Reindeer', 'RRainder', 'santa', 12, 1773);//test for December case

function fullName(user){
    return user.firstName + " " + user.lastName;
}

//conditonal funciton to get the current month's name 
function getMonthName(user) {
    if (user.birthMonth == 1)
        return "January"
        if (user.birthMonth == 2)
        return "February"
        if (user.birthMonth == 3)
        return "March"
        if (user.birthMonth == 4)
        return "April"
        if (user.birthMonth == 5)
        return "May"
        if (user.birthMonth == 6)
        return "June"
        if (user.birthMonth == 7)
        return "July"
        if (user.birthMonth == 8)
        return "August"
        if (user.birthMonth == 9)
        return "September"
        if (user.birthMonth == 10)
        return "October"
        if (user.birthMonth == 11)
        return "November"
    else return "December"
};

function getUserBirthDate(user) {
    return fullName(user)+ "'s " + "birthdate is" + " " + getMonthName(user) + ", " + user.birthYear
}

currentMonth = (new Date()).getMonth()+1;

currentYear = (new Date()).getFullYear();

//conditional using the terinary operator. If the first statment is true then print -1 and if false, print straight subrtaction
function getUserAge(user) {
    return user.firstName + " is " + (
     (user.birthMonth > currentMonth)?
        currentYear-user.birthYear-1:
    currentYear-user.birthYear) + " years old"
};

console.log(getUserBirthDate(userOne));
console.log(getUserAge(userOne));

console.log(getUserBirthDate(userTwo));
console.log(getUserAge(userTwo));

console.log(getUserBirthDate(userThree));
console.log(getUserAge(userThree));

console.log(getUserBirthDate(userFour));
console.log(getUserAge(userFour));