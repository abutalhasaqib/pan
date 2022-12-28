import React from 'react'
import Card from '../Card'
import NameAndDescription from '../screens/NewProduct/NameAndDescription'

const JoinasAdmin = () => {

    return (
        <>
            <Card
                children={<NameAndDescription navigia="/"/>}
            />
        </>
    )
}

export default JoinasAdmin