import { HeaderStyles } from '@lib/styles';

export default function Header({ children }: HeaderProps) {
    return <header className={HeaderStyles.header}>{children}</header>;
}
