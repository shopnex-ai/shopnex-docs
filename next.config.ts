import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import nextra from 'nextra';

const withNextIntl = createNextIntlPlugin();

const withNextra = nextra({
    latex: true,
    search: {
        codeblocks: false,
    },
});

const baseConfig: NextConfig = {
    output: 'export',
    reactStrictMode: true,
    serverExternalPackages: ['@node-rs/argon2'],
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
};

const nextConfig = withNextIntl(withNextra(baseConfig));

export default nextConfig;
