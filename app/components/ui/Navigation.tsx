'use client';
import { useState } from 'react';
import { ColumnAlignLeft, RowAlignLeft } from '@lib/components';
import { NavigationStyles } from '@lib/styles';
import Image from 'next/image';

export default function Navigation({ children }: NavigationProps) {
    const [dropdown, setDropdown] = useState(false);
    function toggleDropdown() {
        setDropdown(!dropdown);
    }
    return (
        <RowAlignLeft style={NavigationStyles.navigation}>
            <RowAlignLeft style={NavigationStyles.navigation_lg}>
                {children}
            </RowAlignLeft>
            <RowAlignLeft
                style={NavigationStyles.navigation_md}
                OnClickCallback={toggleDropdown}
            >
                {dropdown ? (
                    <Image
                        src={'/icons/close-dropdown.svg'}
                        alt='Dropdown Icon'
                        width={216}
                        height={144}
                    />
                ) : (
                    <Image
                        src={'/icons/open-dropdown.svg'}
                        alt='Dropdown Icon'
                        width={216}
                        height={144}
                    />
                )}
                {dropdown ? (
                    <ColumnAlignLeft style={NavigationStyles.dropdown}>
                        {children}
                    </ColumnAlignLeft>
                ) : (
                    <></>
                )}
            </RowAlignLeft>
        </RowAlignLeft>
    );
}
