function weightedUniformStrings(s, queries) {
    let newString = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i + 1] && s[i] != s[i - 1]) {
            newString.push(s.charCodeAt(i) - 96);
        }
        else if (s[i] != s[i + 1] && s[i] == s[i - 1]) {
            newString.push((newString[newString.length - 1]) + (s.charCodeAt(i) - 96));
        }
        else if (s[i] == s[i + 1] && s[i] == s[i - 1]) {
            newString.push((newString[newString.length - 1]) + (s.charCodeAt(i) - 96));
        }
        else {
            newString.push(s.charCodeAt(i) - 96);
        }
    }
    //console.log(newString);
    let ans = [];

    for (let i = 0; i < queries.length; i++) {
        if (newString.includes(queries[i])) {
            ans.push('Yes');
        }
        else {
            ans.push('No');
        }
    }

    return ans;

}

let queries = 0;

console.log(weightedUniformStrings("abccddde", queries));