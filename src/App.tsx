import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import useInterval from "./customHooks/useInterval";

function App(props: any): any {

    const [val, setVal] = useState(0);
    const [timer, setTimer] = useState(0);
    //
    const tryNumber = useState(58);
    //
    const [person = {
        name: '',
        surname: '',
        age: 0
    }, setPerson] = useState(null);

    //
    const [point, setPoint] = useState(val);

    //list
    const [list, setList] = useState([]);

    const refData: any = useRef(0);

    //Once
    useEffect(() => {
        console.log("Props : ", props);

        let personInfo: any = {
            name: 'Aykut',
            surname: 'Sezgin',
            age: 24
        };

        setPerson(personInfo);
    }, []);

    //More Times
    useEffect(() => {
        console.log(`- PropsValue: ${props.value}  || - Data : ${val}  || - RefData : ${refData.current}`);

        // return () => {
        //     setData(0);
        // }
    }, [val]);

    //Custom Hooks
    useInterval(() => {
        setTimer(timer => timer + 1);
    }, 1000);

    const addList = (e: any) => {
        e.preventDefault();

        let numberVal: any = {
            number: (val + 1) * 2
        };

        setList([...list, numberVal]);
    };

    return (
        <>
            <div className='l-container md-radius'>
                <p className='l-timer'>Timer : {timer} s.</p>
                <div className='info q-width sm-radius'>
                    <p>Data : {val}</p>
                    <p>Point : {point}</p>
                    <p>RefData : {refData.current}</p>
                    <hr/>
                    <p>TryNumber : {tryNumber}</p>
                    <button className='l-btn btn-inc f-width' onClick={(e) => {
                        setVal(val + 1);
                        setPoint(val);
                        refData.current = refData.current + 3;
                        addList(e);
                    }}>Increment
                    </button>
                </div>

                <p>Person : {JSON.stringify(person)}</p>
                <p>Props : {JSON.stringify(props)}</p>
                <p>PropsValue : {props.value}</p>
                <p>List : {JSON.stringify(list)}</p>

            </div>
        </>
    );
}

export default App
;