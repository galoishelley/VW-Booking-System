import React from 'react';
import imgQR from "../../images/qr.PNG";

const showQR = () => {
    return (
        <div>
            <h3>Easily book and manage appointments with Veyor Wellness on your phone.</h3>
            <h5 className="my-1">
                Get the mobile app by opening the camera on your phone, and scanning this RQ code:
            </h5>
            <div className="qr_wrapper">
                <img src={imgQR} alt="QR" />
            </div>

        </div>
    )
}

export default showQR;
