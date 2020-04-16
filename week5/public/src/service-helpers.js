function _get(url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'auth-token': authTokenHeader(),
       
      }
    }).catch(handleRequestFailure);
  }
  
  function _post(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 'auth-token': authTokenHeader()
      },
      body: JSON.stringify(data) 
    }).catch(handleRequestFailure);
  }
  
  function _put(url, data) {
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 'auth-token': authTokenHeader()
      },
      body: JSON.stringify(data)
    }).catch(handleRequestFailure);
  }
  function authTokenHeader() {
    const access_token = getStorage('access_token');
    if(access_token) {
      return "Bearer" + " " + access_token
    }
  }

  function handleRequestFailure(failedReq){
    if (failedReq.status == 403 && failedReq.json().msg == "Invalid Token") {
      doLogout();
    }
    else {throw failedReq};
  }