# TestLib
Test npm framework for datascience stuff

1) formatting data from csv to JSON. 




Some clarity on CJS and ESM. The website searches and YT content is outdated and most of it is non functional. 

# step2: configure npm to generate correct package.json with defaults

author, license. After this step you should have a correct .npmrc with author
name, a token which should not be published, and defaults for email. 
added save-exact true which locks down installed packages to a specific version
number like fs=3.4.5 instead of fs=^3.4.5 
review .npmrc
Careful: there are potential conflicts when NPM looks into this file for variables
make sure you use the same email for github and npm accounts. 

`
npm config set init-license "MIT"
configure npm using configure commaand until npm init produces a package.json with the correct defaults
`

this is final .npmrc
init-author-name=doug chang
init-author-email=dougc@stanfordalumni.org
save-exact=true
init-license=MIT


# step3: import json data with both ESM and CJS. build simple api for data and func to return single random item from data

For 3) you have 2 options, change teh file name of get_data.js to get_data.mjs or change package.json to include "type":"module"/ Note the use of double quote strings. Single quote wont work
 testLIB git:(step3a) ✗ node ./src/get_data.js
/Users/dc/testLIB/src/get_data.js:1
import data from './MOCK_DATA.json' assert { type: "json" };
^^^^^^

SyntaxError: Cannot use import statement outside a module

This is different than browser code running in node using ES6. CJS is not supported



# step4: add linter

the problem is there is no easy way to debug eslint rules. There has to be source code option to tell you which rule is being processed when error is generated

nyc config in package.json.
nyc and mocha have a problem with import which requires intercepting the transpilation and using babel-register to fix

# step5
 
git hooks. Add before commit npm run validate. To delete this remoe .git/hooks

# step6

babel install, put config in package.json which is bad idea. 
use .babelrc so people know where to look for it

# step 7

webpack install.

travis install. copy and paste .travis.yml from other projects
