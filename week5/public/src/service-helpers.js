function _get(url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'auth-token': authTokenHeader()
      }
    });
  }
  
  function _post(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 'auth-token': authTokenHeader()
      },
      body: JSON.stringify(data) 
    });
  }
  
  function _put(url, data) {
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 'auth-token': authTokenHeader()
      },
      body: JSON.stringify(data)
    });
  }
  function authTokenHeader() {
    const access_token = getStorage('access_token');
    if(access_token) {
      return "Bearer" + " " + access_token
    }
  }