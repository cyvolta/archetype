import Image from 'next/image';
import { BrandStyles } from '@lib/styles';

export default function Brand() {
    return (
        <div className={BrandStyles.brand}>
            <Image
                src={'/logo.svg'}
                alt='Brand Icon'
                width={35}
                height={35}
            />
            <p>Archetype</p>
        </div>
    );
}
