
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

// console.log(args_f);
console.log();

args_f
    .sort()
    .reduce(  // counts repetitions in ac
        (ac, el, i, a)  =>  {
            if (el===a[i+1]) {
                return ++ac;     // adds one repetition to ac
            } else {
                console.log(`${el}: ${ac}`); // prints repetitions
                return 1;   // initializes repetition count for next param
            }
        },
        1
    );
