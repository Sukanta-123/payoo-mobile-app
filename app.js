let loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", (e) => {
  // e.preventDefault()  // if i cant add type button on my form button
  let mobileField = document.getElementById("mbl-field").value;
  let pinField = document.getElementById("pin-field").value;
  const mblNumber = 18422313410;
  const pinNmb = 12192;
  const mblNumberCnv = parseInt(mobileField);
  const pinNumberCnv = parseInt(pinField);
  if (mblNumberCnv === mblNumber && pinNumberCnv === pinNmb) {
    window.location.href = "./home.html";
  } else if (mblNumberCnv !== mblNumber) {
    alert("Please provide your verified number");
    return;
  } else if (pinNumberCnv !== pinNmb) {
    alert("Provide ur valid pin");
    return;
  }
});
