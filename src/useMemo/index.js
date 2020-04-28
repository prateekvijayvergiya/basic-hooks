import React, { Fragment, useState, useMemo } from 'react'
import { Button } from '@material-ui/core';

export default () => {
    const [count, setCount] = useState(1)
    const [number, setNumber] = useState(0)
    const expensiveFunction = (count) => {
       console.log(`Calculating expensive value for ${count}`)
       return count * count * 1000 * count * 1000
    }

    const memoisedHookValue = useMemo(() => expensiveFunction(count), [count])
   //  const memoisedHookValue = expensiveFunction(count)
    return (
        <Fragment>
           <p>Hi, Now let's have some fun with memoised values using useMemo !!!</p>
           <p>{`Expensive function value is --> ${memoisedHookValue}`}</p>
           <p>{`Number is --> ${number}`}</p>
           <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
              Calculate expensive value for {count + 1}
           </Button>
           <Button variant="contained" color="secondary" onClick={() => setNumber(number + 1)}>Change the Number</Button>
        </Fragment>
   )
}