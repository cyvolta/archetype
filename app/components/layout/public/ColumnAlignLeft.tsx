import { ColumnAlignLeftStyles } from '@lib/styles';

export default function ColumnAlignLeft({
    children,
    style,
}: ColumnAlignLeftProps) {
    return (
        <div
            className={[style, ColumnAlignLeftStyles.column_align_left].join(
                ' '
            )}
        >
            {children}
        </div>
    );
}
