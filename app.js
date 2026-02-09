let loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", (e) => {
  // e.preventDefault()  // if i cant add type button on my form button
  let mobileField = document.getElementById("mbl-field").value;
  let pinField = document.getElementById("pin-field").value;
  const mblNumber = 1842231341;
  const pinNmb = 121922;
  const mblNumberCnv = parseInt(mobileField);
  const pinNumberCnv = parseInt(pinField);
  if (mblNumberCnv === mblNumber && pinNumberCnv === pinNmb) {
    window.location.href = "./home.html";
  } else {
    alert("Nah, try again");
  }
});
