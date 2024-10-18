import {
    Brand,
    Footer,
    Header,
    Hero,
    Main,
    Navigation,
    NavigationItem,
} from '@lib/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Archetype',
};

export default function Landing() {
    return (
        <>
            <Header>
                <Brand />
                <Navigation>
                    <NavigationItem
                        URL=''
                        name='Landing'
                        active
                    />
                    <NavigationItem
                        URL=''
                        name='Docs'
                    />
                </Navigation>
            </Header>
            <Main>
                <Hero />
            </Main>
        </>
    );
}
