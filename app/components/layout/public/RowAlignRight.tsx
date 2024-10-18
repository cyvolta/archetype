import { RowAlignRightStyles } from '@lib/styles';

export default function RowAlignRight({
    children,
    style,
    OnClickCallback,
}: RowAlignRightProps) {
    return (
        <div
            className={[style, RowAlignRightStyles.row_align_right].join(' ')}
            onClick={OnClickCallback}
        >
            {children}
        </div>
    );
}
