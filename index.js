let datainput = document.getElementById("datainput");
let dataoutput = document.getElementById("dataoutput");
let converterbtn = document.getElementById("converterbtn");
let animationImg = document.getElementById("animation");
let dataoutputh4 = document.getElementById("dataoutputh4");
let errorMessage =
  "Please enter valid Ipv6 address. only allowed English Characters, Numbers and : only.";
animationImg.style.display = "none";

function process(splitedIp) {
  let newIp = [];

  for (let i = 0; i < splitedIp.length; i++) {
    let part = splitedIp[i].split("");
    newIpLth = newIp.length;
    if (part.length !== 4) {
      dataoutput.innerHTML = "";
      dataoutputh4.innerHTML = errorMessage;
      return;
    }
    if (splitedIp[i] === "0000" && newIp[newIpLth - 1] === ":") {
    } else if (splitedIp[i] === "0000" && newIp[newIpLth - 1] === "0:") {
      let isInclude = newIp.includes(":");
      if (isInclude) {
        newIp.push("0:");
      } else {
        newIp.pop();
        newIp.push(":");
      }
    } else if (splitedIp[i] === "0000") {
      newIp.push("0:");
    } else {
      let newA = [];
      function all(a) {
        if (part[a] === "0" && newA.length === 0) {
          all(a + 1);
        } else if (a < 4) {
          newA.push(part[a]);
          all(a + 1);
        }
      }
      all(0);
      if (i !== splitedIp.length - 1) {
        newA.push(":");
      }
      let newPart = newA.join("");
      newIp.push(newPart);
    }
  }
  animationImg.style.display = "inline-block";
  animationImg.src =
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif";
  let result = newIp.join("");
  setTimeout(() => {
    animationImg.style.display = "none";
    dataoutputh4.innerHTML = "";
    dataoutput.innerHTML = result;
    datainput.value = "";
  }, 2000);
}

function charctorCheck(str) {
  return /^[A-Za-z0-9:]*$/.test(str);
}

converterbtn.addEventListener("click", (e) => {
  let splitter = datainput.value.split(":");
  let str = datainput.value;

  if (charctorCheck(str) && str !== "" && str.length === 39) {
    process(splitter);
  } else {
    dataoutput.innerHTML = "";
    dataoutputh4.innerHTML = errorMessage;
  }
});
