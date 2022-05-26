/*here we need to import a couple of objects from react modules.
Teacher says, if you are not familiar with ES6 modules yet, don't worry, just code along, we'll get to those pretty bunch soon. 
Alrighty Then!! */

import React from 'react'; //So 'react' is the module; whereas, 'React' is the object that we are import from the react module.
import ReactDOM from 'react-dom'; //the other module we are going to import is 'ReactDOM', and we're going to import it from 'react-dom'

const element = <h1> Hello World</h1>;
ReactDOM.render(element, document.getElementById('root')); //since in index.html we have a div that contains the root for our application -- here, in index.js, we need to use a plane vanilla JavaScript code [line 9], to get a reference tot that root element.

