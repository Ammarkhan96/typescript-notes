//Rest Parameters:
function hello(name) {
    if (name === void 0) { name = "Alexandar"; }
    var nickNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nickNames[_i - 1] = arguments[_i];
    }
    console.log("Hello ".concat(name, " aka ").concat(nickNames));
}
hello("Imran", "Alexandar", "Alex", "Alexandar the Great");
