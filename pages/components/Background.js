import Image from 'next/image';
import { bgWrap, bgText, title } from '../../styles/Home.module.css'
import Clock from './clock';

const Background = () => {
    const imgBack = require('../assets/landon-arnold-ODCAH4GDipY-sm.jpg');
    return (
        <>
            <div className={bgWrap}>
                <Image
                    alt="background"
                    src={imgBack}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <p className={title}>Next React Clock</p>
            <p className={bgText}>
                <Clock />
            </p>
            
        </>
    )
}

export default Background
