
import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import AppointContext from '../../context/appoint/appointContext';
import Datepicker from './datepicker';
import { formatDate } from  '../shared/misc';

const AppointItem = ({ item }) => {


    const appointContext = useContext(AppointContext);
    const { setCurrentItem, setShowDatePicker, showDataPicker, keepSelectedItem,setSelectedDate} = appointContext;
    const { spaname, spanote } = item;

    const setItem = () => {
        setCurrentItem({ spaname: spaname, spanote: spanote });
        //show date picker when you click item
        setShowDatePicker(1);  
        //make a current date if you did not click datepicker
        setSelectedDate(formatDate(new Date()));
        //keep selected item when you click items.
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
