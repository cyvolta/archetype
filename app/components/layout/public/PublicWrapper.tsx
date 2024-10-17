import { PublicWrapperStyles } from '@lib/styles';

export default function PublicWrapper({
    children,
    id,
    style,
}: PublicWrapperProps) {
    return (
        <section
            id={id}
            className={[PublicWrapperStyles.public_wrapper, style].join(' ')}
        >
            {children}
        </section>
    );
}
