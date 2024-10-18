import { ColumnAlignRightStyles } from '@lib/styles';

export default function ColumnAlignRight({
    children,
    style,
}: ColumnAlignRightProps) {
    return (
        <div
            className={[style, ColumnAlignRightStyles.column_align_right].join(
                ' '
            )}
        >
            {children}
        </div>
    );
}
