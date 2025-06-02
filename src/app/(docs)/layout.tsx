import { Logo } from '@/templates/Logo';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import { getPageMap } from 'nextra/page-map';

const navbar = <Navbar logo={<Logo />} />;
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

export default async function RootLayout({ children }: any) {
    return (
        <Layout
            navbar={navbar}
            sidebar={{
                autoCollapse: true,
                defaultOpen: true,
            }}
            pageMap={await getPageMap()}
            docsRepositoryBase='https://github.com/shuding/nextra/tree/main/docs'
            footer={footer}>
            {children}
        </Layout>
    );
}
