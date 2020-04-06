const doLogin = function(e) {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
  
    login({
      userName: userName,
      password: password
    }).then(function(res) {
      window.location.href = 'home.html';
    });
  };
  
  const doRegister = function(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const birthMonth = document.getElementById('birthMonth').value;
    const birthYear = document.getElementById('birthYear').value
  
    register({
      firstName: firstName,
      lastName: lastName,  
      userName: userName,
      password: password,
      birthMonth: parseInt(birthMonth),
      birthYear: parseInt(birthYear)
    }).then(function(res) {
      window.location.href = 'home.html';
    });
  };
  
  const doLogout = function(e) {
    e.preventDefault();
  };