import React from 'react';
import appoinment from '../../../../assets/images/appointment.png'

const HomeContact = () => {
    return (
        <div style={
            {
                background: `url(${appoinment})`
            }
        } className='mt-10'>
            <div className='text-center'>
                <h2 className='text-primary font-bold'>Contact Us</h2>
                <h2 className='text-2xl text-white'>Stay connected with us</h2>
                <br />
                <form>
                    <input type="email" name='email'  placeholder='Email'/>
                    <br /> <br />
                    <input type="text" name='subject'  placeholder='Subject'/>
                    <br /> <br />
                    <input type="text" name='message' placeholder='Your Message'/><br /><br />
                    <input className='btn btn-primary' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default HomeContact;