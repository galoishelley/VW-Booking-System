import React, { Fragment, useContext } from 'react';
import AppointItem from './appointItem';
import AppointContext from '../../context/appoint/appointContext';


const Appoint = () => {

    const appointContext = useContext(AppointContext);

    const { items } = appointContext;

    if (items.length === 0) {
        return <h4>Please add appointment List</h4>
    }

    return (
        <Fragment>
            {items.map(item => (
                <div key={item.spaname}>
                    <AppointItem item={item}/>
                </div>
            ))}
        </Fragment>
    )
}

export default Appoint;