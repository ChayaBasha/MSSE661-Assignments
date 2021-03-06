const doLogin = function(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
  
    login({
      userName: userName,
      password: password
    }).then(res => res.json())
    .then(body => {
     
      const {auth, access_token} = body;
  
      setStorage('isAuth', auth);
      setStorage('access_token', access_token);
        window.location.href = 'home.html';
    });
    
    };
  
  const doRegister = function(event) {
    event.preventDefault();
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
  
  const doLogout = function(event) {
    event.preventDefault();
    logout();
    window.location.href= '/';
  };

  (() => {
  if (storageHasData()) {
    const isAuth = getStorage('isAuth');
    if(!isAuth) {
      document.getElementById('logout').setAttribute("hidden", "hidden");
    } else {
      document.getElementById('logout').removeAttribute("hidden");
    }
  }
})();