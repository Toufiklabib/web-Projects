import React from 'react';

const Userprofile = ({logo}) => {
    return (
        <div >
            <div >
                <div className="avatar flex justify-center ">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='' src={logo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userprofile;