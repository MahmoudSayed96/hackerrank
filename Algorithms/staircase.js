// Complete the staircase function below.
function staircase(n) {
  let str = ``;
  for (let lin = 1; lin <= n; lin++) {
    for (let spc = lin; spc < n; spc++) {
      str += " ";
    }
    for (let hash = 0; hash < lin; hash++) {
      str += "#";
    }
    str += "\n";
  }
  console.log(str);
}

staircase(4);
