let val = (e) => {
    let i = document.querySelector(".result_no");
    // console.log(i.value, e);
    if (e === "=") {
      if (eval(i.value)) {
        i.value = eval(i.value);
      } else {
        i.value = "Error";
      }
    } else if (e == "C") {
      i.value = "";
    } else {
      i.value += e;
    }
  };