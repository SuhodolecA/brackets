module.exports = function check(str, bracketsConfig) {
    let stackBox = [];
    if (!Array.isArray(bracketsConfig)) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
                if (stackBox.length > 0 && stackBox[stackBox.length - 1] === str[i]) {
                    stackBox.pop();
                } else {
                    stackBox.push(str[i]);
                }
            }
            if (str[i] === bracketsConfig[j][0]) {
                stackBox.push(str[i]);
            }
            if (str[i] === bracketsConfig[j][1]) {
                if (bracketsConfig[j][0] === stackBox[stackBox.length - 1]) {
                    stackBox.pop();
                } else {
                    return false;
                }
            }
        }
    }
    return stackBox.length === 0;
}
