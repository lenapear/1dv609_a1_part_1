# Javascript version

The js project is arranged as follows

* /examination/ folder is placeholder for the examination, dont change it until then
* /practice/ folder contains the code for the two practice tasks
* /practice/\*task\*/src contains correct and buggy versions of the system under test, you should not change these classes, but may need to read them
* /practice/\*task\*/tests/password.test.js this is where you add your tests
* /practice/\*task\*/tests/password.test.js select which version of Password by commenting out/in in the top of the file, see below:

```js
...
const Password = require('../src/sut_versions/BugMissingNumberCheck'); 
//const Password = require('../src/sut_versions/BugWrongMessage'); 
//const Password = require('../src/Correct'); 
...

```


Install tools with:
```bash
npm install
```

Run tests with:
```bash
npm test
```