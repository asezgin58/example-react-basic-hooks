import * as React from 'react';
import {useState, useEffect} from 'react';

function App(props: any): any {

    const [data, setData] = useState(0);

    useEffect(() => {
        console.log("Props : ", props);
    }, []);

    useEffect(() => {
        console.log(`PropsValue: ${props.value} - Data : ${data}`);

        // return () => {
        //     setData(0);
        // }
    }, [data]);

    return (
        <>
            <div className='l-container md-radius'>
                <div className='info q-width sm-radius'>
                    <p>Data : {data}</p>
                    <button className='l-btn btn-inc f-width' onClick={() => setData(data + 1)}>Increment</button>
                </div>

                <p>Props : {JSON.stringify(props)}</p>
                <p>PropsValue : {props.value}</p>
            </div>
        </>
    );
}
export default App;