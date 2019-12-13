
let [x, y, ...args_f] = process.argv;

console.log(`Route to node.js: ${x}`)

console.log(`Route to this command: ${y}`)

let i = args_f.indexOf('-r');

// console.log(i, args_f);

if (i !== -1) {
    args_f.splice(i,1);
    let param = args_f[i];
    while (i !== -1) {
        args_f.splice(i,1);
        i = args_f.indexOf(param);
    }
}


