# Tema-2-Tehnologii-Web
Matei Elena-Adelina - tema #2 Tehnologii Web

Tematica: Javascript
Avand urmatoarea functie function addTokens(input, tokens) unde:
input este un string ce poate sa contina "...". De exemplu: Subsemnatul ..., dominiciliat in ...;
tokens un vector de tokenuri.
Functia trebuie sa inlocuiasca toate ... din input cu valorile corespunzatoare din tokens sub urmatorul format ${tokenName}, in ordinea in care exista in vector;
Complete the following tasks:
input trebuie sa fie de tip string. Daca alt tip este pasat ca si parametru aruncati Error cu mesajul Input should be a string; (0.5 pts)
input trebuie sa aiba cel putin 6 caractere ca si lungime. Daca dimensiunea input-ului este mai mica de 6, aruncati Error cu mesajul Input should have at least 6 characters; (0.5 pts)
tokens este un vector de elemente cu urmatorul format: {tokenName: string}. Daca urmatorul format nu este respectat, aruncati Error cu urmatorul mesaj Invalid array format; (0.5 pts)
Daca input nu contine ... returnati valoarea initiala a input-ului; (0.5 pts)
Daca input contine ..., inlocuiti-le cu valorile specifice si returnati noul input; (0.5 pts)


Instrucțiuni de rulare
Obiectiv : Să se modifice în locul marcat fișierul JS astfel încât să treacă testele
Pași pentru a rula testele și a trimite tema
Clonați repository-ul cu tema
Din directorul main rulați npm install
Din directorul main rulați npm test
Ștergeți directorul node_modules
Arhivați directorul cu rezolvare ca zip
Încărcați arhiva prin intermediul formularului
