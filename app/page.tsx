import { Brand, Footer, Header, Hero, Main } from '@lib/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Archetype',
};

export default function Landing() {
    return (
        <>
            <Header>
                <Brand />
            </Header>
            <Main>
                <Hero />
            </Main>
        </>
    );
}
