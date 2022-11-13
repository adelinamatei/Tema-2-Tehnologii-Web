//calea fisierului
const app = require('./../app');


//input trebuie sa fie de tip string. Daca alt tip 
//este pasat ca si parametru aruncati Error 
//cu mesajul Input should be a string;
describe('Test addTokens function', () => {
    test('input should be a string', (done) => {
        expect(() => {
            app.addTokens(5)
        }).toThrowError('Invalid input');
        done();
    });

    //input trebuie sa aiba cel putin 6 caractere ca si lungime. 
    //Daca dimensiunea input-ului este mai mica de 6, 
    // aruncati Error cu mesajul Input should have at least 6 characters;
    test('input should be at least 6 characters long', (done) => {
        expect(() => {
            app.addTokens('Input')
        }).toThrowError('Input should have at least 6 characters');
        done();
    })

    //tokens este un vector de elemente cu urmatorul format: 
    //{tokenName: string}. Daca urmatorul format nu este respectat, 
    //aruncati Error cu urmatorul mesaj Invalid array format;
    test('tokens parameter should contain elements with the following format {tokenName: string}', (done) => {
        expect(() => {
            app.addTokens('Inputs', [{ tokenName: 5 }])
        }).toThrowError('Invalid array format');
        done();
    })

    //Daca input nu contine ... returnati valoarea initiala a input-ului;
    test('if there is nothing to replace in the input then return it as it is', (done) => {
        expect(app.addTokens('Inputs', [{ tokenName: "user" }])).toBe('Inputs');
        done();
    });

   // Daca input contine ..., inlocuiti-le cu valorile 
   //specifice si returnati noul input;
    test('if the input contains at least ... replace it accordingly', (done) => {
        expect(app.addTokens('Subsemnatul ...', [{ tokenName: 'subsemnatul' }])).toBe('Subsemnatul ${subsemnatul}');
        done();
    })
});