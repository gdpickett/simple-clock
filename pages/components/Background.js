import Image from 'next/image';
import { bgWrap, bgText, title } from '../../styles/Home.module.css'
import Clock from './clock';
import * as VFX from 'react-vfx';

const Background = () => {
    const imgBack = require('../assets/landon-arnold-ODCAH4GDipY-sm.jpg');
    return (
        <VFX.VFXProvider>
            <div className={bgWrap}>
                <Image
                    alt="background"
                    src={imgBack}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <p className={title}><VFX.VFXSpan shader='pixelateTransition'>Next React Clock</VFX.VFXSpan></p>
            <p className={bgText}>
                <Clock />
            </p>
            
        </VFX.VFXProvider>
    )
}

export default Background
