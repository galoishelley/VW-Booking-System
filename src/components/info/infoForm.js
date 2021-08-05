import React, { useState, useContext } from 'react'
import AppointContext from '../../context/appoint/appointContext';
import { useHistory  } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import { validatePhoneNumber,validateEmail } from  '../shared/misc';


const InfoForm = (props) => {
    const appointContext = useContext(AppointContext);

    const { setOrderItem,setCurrentStep } = appointContext;

    const history = useHistory();

    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;

    // useEffect(() => {
    //     if (current !== null) {
    //         setContact(current);
    //     } else {
    //         setContact({
    //             name: '',
    //             email: '',
    //             phone: '',
    //             address: '',
    //             type: 'personal'
    //         });
    //     }
    // }, [infoContext, current])

    const [info, setInfo] = useState({
        mark:'personalInfo',
        fname: '',
        lname: '',
        phone: '',
        email: ''
    });

    const { fname, lname, phone, email } = info;

    const onChange = e => setInfo({ ...info, [e.target.name]: e.target.value });

    const onSubmit = e => {

        e.preventDefault();

        if (fname === '' || lname === '' || phone === '' || email ==='') {
            setAlert('please enter all fields', 'test')
            return;
        }else{
            if(!validatePhoneNumber(phone)) {
                setAlert('please enter correct phone number', 'test')
                return;
            }

            if(!validateEmail(email)){
                setAlert('please enter correct email', 'test')
                return;
            }
        }

        setOrderItem(info);
        setCurrentStep(3);

        history.push('/comfirm');
    };

    // const clearAll = () => {
    //     clearCurrent();
    // }

    return (
        <form className="form" onSubmit={onSubmit}>
            <label htmlFor="name">Name<span> *</span></label>
            
            <input type="text" placeholder='First Name' name='fname' value={fname} onChange={onChange}/>
            <input type="text" placeholder='Last Name' name='lname' value={lname} onChange={onChange} />
            <label htmlFor="phone">Phone</label>
            <input type="text" placeholder='Phone' name='phone' value={phone} onChange={onChange} />
            <label htmlFor="email">Email<span> *</span></label>
            <input type="email" placeholder='Email' name='email' value={email} onChange={onChange} />
            <div>
                <input type="submit" value='Complete Appointment &gt;&gt;' onClick={onSubmit} className="btn btn-dark btn-block" />
                {/* <Link to="/comfirm" className="btn btn-dark btn-block" onClick={onSubmit}>Complete Appointment &gt;&gt;</Link> */}
            </div>
        </form>
    )
}

export default InfoForm
