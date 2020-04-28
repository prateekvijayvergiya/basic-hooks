import React, {useState, Fragment} from 'react'
import { Button } from '@material-ui/core';

export default () => {
    const [count, setCount] = useState(0)
    return (
        <Fragment>
            <p>Hi I am explaining React useState Hook, let's have fun !!!!</p>
            <p>{`Count value is --> ${count} `}</p>
            <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>Click Me</Button>
        </Fragment>
    )
}