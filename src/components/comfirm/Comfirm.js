import React from 'react';
import ResultMsg from './resultMsg';
import ShowQR from './showQR';

const Comfirm = () => {
    return (
        <div className="grid-2">
            <div className="col-1">
                <ResultMsg />
            </div>
            <div className="col-2">
                <ShowQR />
            </div>
        </div>
    )
}

export default Comfirm;
