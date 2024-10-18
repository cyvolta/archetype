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
    interface HeaderProps {
        children: ReactNode;
    }
    interface RowAlignLeftProps {
        children: ReactNode;
        style?: string;
        OnClickCallback?: () => void;
    }
    interface NavigationProps {
        children: ReactNode;
    }
    interface ColumnAlignLeftProps {
        children: ReactNode;
        style?: string;
    }
    interface NavigationItemProps {
        URL: string;
        name: string;
        active?: boolean;
        style?: string;
    }
}
