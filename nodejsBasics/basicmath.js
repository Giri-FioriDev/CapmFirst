module.exports = {
    add: function(...args) {
        return args.reduce((sum, val) => sum + val, 0);
    },
    sub: function(...args) {
        return args.reduce((diff, val) => diff - val);
    },
    multi: function(...args) {
        return args.reduce((product, val) => product * val, 1);
    },
    divd: function(...args) {
        return args.reduce((result, val) => {
            if (val === 0) {
                throw new Error("Cannot divide by zero");
            }
            return result / val;
        });
    }
}