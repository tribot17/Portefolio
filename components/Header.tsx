import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Header = () => {
      const [windowSize, setWindowSize] = useState();

    return (
        <div className={"header"}> 
            <Image src={"/images/wave_1.png"} alt="img" width={1920} height="150" />
        </div>
    );
};

export default Header;