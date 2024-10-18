import Link from 'next/link';
import Image from 'next/image';
import { ButtonStyles } from '@lib/styles';

export default function Button({
    URL,
    name,
    icon,
    path,
    outline,
}: ButtonProps) {
    return (
        <Link
            className={
                outline
                    ? ButtonStyles.button_outline
                    : ButtonStyles.button_normal
            }
            href={URL}
        >
            {icon ? (
                <Image
                    src={[path].join('')}
                    alt='Button Icon'
                    width={24}
                    height={24}
                />
            ) : (
                <></>
            )}
            <p>{name}</p>
        </Link>
    );
}
