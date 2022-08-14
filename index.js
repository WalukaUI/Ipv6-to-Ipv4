let datainput = document.getElementById("datainput");
let dataoutput = document.getElementById("dataoutput");
let converterbtn = document.getElementById("converterbtn");

function process(splitedIp) {
  let newIp = [];

  for (let i = 0; i < splitedIp.length; i++) {
    newIpLth = newIp.length;

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
      let part = splitedIp[i].split("");
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
  let result = newIp.join("");
  dataoutput.innerHTML = result;
}

converterbtn.addEventListener("click", (e) => {
  let splitter = datainput.value.split(":");
  process(splitter);
});