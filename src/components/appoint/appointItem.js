
import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import AppointContext from '../../context/appoint/appointContext';
import Datepicker from './datepicker';


const AppointItem = ({ item }) => {


    const appointContext = useContext(AppointContext);
    const { setCurrentItem, setShowDataPicker, showDataPicker, keepSelectedItem} = appointContext;
    const { spaname, spanote } = item;

    const setItem = () => {
        setCurrentItem({ spaname: spaname, spanote: spanote });
        setShowDataPicker(1);

        keepSelectedItem(spaname);
    }

    return (
        <div>
            <div className='card bg-light' onClick={setItem}>

                {spaname && (
                    <p>
                        {spaname}
                    </p>
                )}

                {spanote && (
                    <p>
                        {spanote}
                    </p>
                )}

            </div>

            {showDataPicker && <div>
                <Datepicker />
            </div>}
        </div>
    )
}

AppointItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default AppointItem;
