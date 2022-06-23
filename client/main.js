const rootURL = "/api/";

//register user
const registerUser = async () => {
  const username = document.querySelector("#register-input-username").value;
  const password = document.querySelector("#register-input-password").value;

  const user = {
    username,
    password,
  };

  try {
    const res = await fetch(`${rootURL}register`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error: ", error);
  }

  document.querySelector("#register-input-username").value = "";
  document.querySelector("#register-input-password").value = "";
};

//login
const loginUser = async () => {
  const username = document.querySelector("#login-input-username").value;
  const password = document.querySelector("#login-input-password").value;

  const user = {
    username,
    password,
  };
  try {
    const res = await fetch(`${rootURL}login`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 401) {
      const data = await res.json();
      console.log(data);
    } else {
      throw "Fel användarnamn eller lösenord";
    }
  } catch (error) {
    console.error("Error: ", error);
  }

  document.querySelector("#login-input-username").value = "";
  document.querySelector("#login-input-password").value = "";
};

//check if a user is logged in
const checkLoggedInStatus = async () => {
  try {
    const res = await fetch(`${rootURL}authenticated`);
    if (res.status !== 401) {
      const data = await res.json();
      console.log(data);
    } else {
      throw "Du är inte inloggad!";
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};

const logout = async () => {
  try {
    const res = await fetch(`${rootURL}logout`);
    if (res.status !== 401) {
      const data = await res.json();
      console.log(data);
    } else {
      throw "Du behöver vara inloggad för att kunna logga ut";
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};
