//declarare functie addTokens
function addTokens(input, tokens) {
    //daca inputul nu e un string, se arunca o eroare
    if (typeof input !== 'string') {
        throw Error("Invalid input");
    }
    else {
        //daca inputul are lungimea mai mica de 6 caractere
        if (input.length < 6) {
            throw Error('Input should have at least 6 characters');
        }
    }
    for (let t = 0; t < tokens.length; t++) {
        //verificare format array
        if (typeof (tokens[t].tokenName) !== 'string') {
            throw Error('Invalid array format');
        }
    }
    if (input.includes('...') != true) {
        return input;
    }
    else {
        console.log(input);

        for (let t = 0; t < tokens.length; t++) {
            let token = tokens[t]["tokenName"];
            token = "${" + token + "}";
            let inlocuire = "...";
            let poz = input.indexOf(inlocuire);
            if (poz !== -1) {
                input = input.replace(inlocuire, token);
            }
        }
    }
    return input;
}
const app = {
    addTokens: addTokens
}
module.exports = app;