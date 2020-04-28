import React, { Fragment, useEffect, useState } from 'react'
import { Button } from '@material-ui/core';

export default () => {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState(0)
    useEffect(() => {
        console.log(`Running effect hook ${title}`)
        document.title = `Title of page is ${title}`;
    }, [title])

    return (
        <Fragment>
            <p>Hi, Now I am explaining useEffect hook, Cheers !!!</p>
            <p>{`Count value is --> ${count} `}</p>
            <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>Click Me</Button>
            <Button variant="contained" color="secondary" onClick={() => setTitle(title + 1)}>Change Title</Button>
            {console.log('Ending the rendering')}
        </Fragment>
    )
}