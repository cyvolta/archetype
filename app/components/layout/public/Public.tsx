import { PublicStyles } from '@lib/styles';

export default function Public({ children }: PublicProps) {
    return <div className={PublicStyles.public}>{children}</div>;
}
