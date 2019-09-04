const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let i = 0
function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', function(e){
    const key = parseInt(e.which || e.detail);
    // console.log(key)
    if (key === code[i]){
      // console.log(key)
      i++;
      if (i === code.length){
        alert("You entered the Konami code!");

        i = 0
      }
    }else{
      i = 0
    };
  });
}

// init();

