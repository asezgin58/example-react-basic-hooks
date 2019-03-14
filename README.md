#React Basic Hooks
* State Hook - useState()
* Effect Hook - useState()
* Reference Hook - useRef()
* Custom Hook

##State Hook - useState()
>param1 : represents a variable => param1= VariableName

>param2 : represents a set function for param1 => |
| Suggested Use || => param2= setVariableName

>initialValue : represents a initial value for param1. It can be empty.

```javascript
const [param1, param2] = useState(initialValue);
```
For Example;
```javascript
const [name, setName] = useState('Aykut');
```

##Effect Hook - useEffect()
* Effect hook represent three lifecycle.
>useEffect = ComponentDidMount + ComponentDidUpdate + ComponentWillUnMount

* It can have one or two parameter. If there is second parameter, it is an array.

* Once it works absolutely after the render method. [ComponentDidMount]

* Only once to work, second parameter must be empty.

```javascript
 useEffect(() => {
     console.log('ComponentDidMount');
 }, []);
```
* It works again when state and props variables change. The variable name must be specified in the second parameter. [ComponentDidUpdate]

* It destroys its previous work every time it works.

```javascript
 useEffect(() => {
        console.log('ComponentDidUpdate');         
        console.log('Val : ', val);         
 }, [val]);
```

* It can return the termination function to end the operations in itself. [ComponentWillUnMount]

```javascript
useEffect(() => {
  console.log('ComponentDidMount');
  return () => console.log('ComponentWillUnMount');
}, []);
```

##Reference Hook - useRef()

* It allows a variable to be represented.

```javascript
const refData = useRef(initialValue); // InitialValue can be empty.
```
* To assign a new value;

````javascript
refData.current = 5;
````

##Custom Hook - useInterval()

````javascript
import {useEffect} from 'react';

const useInterval = (fn, delay) => {
    useEffect(() => {
        const id = setInterval(fn, delay);

        return () => clearInterval(id);
    }, []);
};

export default useInterval;
````

Example use;

````javascript
const [timer, setTimer] = useState(0);

useInterval(() => {
    setTimer(timer => timer + 1)
}, 1000);
````

##Software Information
 - TypeScript 
 - React 
 - Webpack 
 - Sass
 


