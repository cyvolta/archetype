import { RowAlignLeftStyles } from '@lib/styles';

export default function RowAlignLeft({
    children,
    style,
    OnClickCallback,
}: RowAlignLeftProps) {
    return (
        <div
            className={[style, RowAlignLeftStyles.row_align_left].join(' ')}
            onClick={OnClickCallback}
        >
            {children}
        </div>
    );
}
