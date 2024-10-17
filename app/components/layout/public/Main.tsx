import { Footer, Public } from '@lib/components';
import { MainStyles } from '@lib/styles';

export default function Header({ children }: MainProps) {
    return (
        <main className={MainStyles.main}>
            <Public>{children}</Public>
            <Footer />
        </main>
    );
}
