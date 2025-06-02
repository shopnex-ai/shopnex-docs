import { redirect } from 'next/navigation';

export default function IndexPage() {
    redirect('/getting-started');
    return (
        <h1
            style={{
                textAlign: 'center',
                fontSize: 64,
                margin: '25vh 0',
                fontWeight: 'bold',
            }}>
            Index page
        </h1>
    );
}
