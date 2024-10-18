import {
    Button,
    ColumnAlignLeft,
    ColumnAlignRight,
    PublicWrapper,
    RowAlignLeft,
    RowAlignRight,
} from '@lib/components';
import { HeroStyles } from '@lib/styles';
import Image from 'next/image';

export default function Hero() {
    return (
        <PublicWrapper
            id='hero'
            style={HeroStyles.hero}
        >
            <div className={HeroStyles.imagery}>
                <Image
                    src={'/images/hero.jpg'}
                    alt='Hero Image'
                    width={1500}
                    height={1000}
                />
            </div>
            <ColumnAlignRight style={HeroStyles.textual}>
                <h1>Build Faster</h1>
                <p>
                    Archetype offers a standardized setup that ensures your
                    projects are built on best practices from the start. Skip
                    the setup hassle and focus on what matters—building great
                    applications.
                </p>
                <RowAlignRight style={HeroStyles.links}>
                    <Button
                        URL=''
                        name='Docs'
                    />
                    <Button
                        URL=''
                        name='Repository'
                        outline
                        icon
                        path='/icons/github.svg'
                    />
                </RowAlignRight>
            </ColumnAlignRight>
        </PublicWrapper>
    );
}
