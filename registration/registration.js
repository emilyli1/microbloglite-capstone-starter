// creating new user when they register their info
function CreateUser() {
  let myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    username: document.getElementById("username").value,
    fullName: document.getElementById("fullname").value,
    password: document.getElementById("password").value,
  });

  // post request
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://microbloglite.herokuapp.com/api/users", requestOptions)
    .then((response) => response.text())
    .then((data) => {
      alert("Registered successfully");
      
      // sends you to index page
      window.location.href = "/landingpage/index.html";
    })
    .catch((error) => console.log("error", error));
  // storing users info
  window.localStorage.setItem(username, raw);
  window.localStorage.getItem(username);
}
