import React, { useContext, Fragment } from 'react'
import { NameContext } from '../nameProvider'
import { Button } from '@material-ui/core';

export default () => {
    const {name, setName} = useContext(NameContext)
    return (
        <Fragment>
            <p>So, this is last hook  useContext !!! </p>
            <p>{`The name coming from context is --> ${name}`}</p>
            <input id='name'/>
            <Button 
            variant="contained" 
            color="primary"  
            onClick={() => setName(document.getElementById('name').value)}>
                Change Name
            </Button>
        </Fragment>
    )
}