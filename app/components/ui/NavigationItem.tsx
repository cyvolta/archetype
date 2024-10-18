import { NavigationItemStyles } from '@lib/styles';
import Link from 'next/link';

export default function NavigationItem({
    URL,
    name,
    active,
}: NavigationItemProps) {
    return (
        <Link
            className={[
                NavigationItemStyles.navigation_item,
                active ? NavigationItemStyles.navigation_item_active : '',
            ].join(' ')}
            href={URL}
        >
            {name}
        </Link>
    );
}
