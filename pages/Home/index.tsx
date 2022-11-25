import React from 'react';
import Image from 'next/image';

const MainPage = () => {
    return (
        <div className='home'>
            <Image className='profile_img' src="/images/hd_profile.png" alt="profile_img" width={412} height={499} />
            <div className='main_text'>
                <h2>Tristan Boettger-Magnier</h2>
                <h3>Développeur React.js / Solidity</h3>

                <button className='cv_button'><p className='cv_button_text'>Mon CV</p> <Image className='cv_button_logo' src="/images/Rectangle_11.png" alt="download" width={38} height={38} /></button>
            </div>
        </div>
    );
};

export default MainPage;