import { ReactNode } from 'react';

declare global {
    interface MainProps {
        children: ReactNode;
    }
    interface PublicProps {
        children: ReactNode;
    }
    interface PublicWrapperProps {
        children: ReactNode;
        id: string;
        style?: string;
    }
}
