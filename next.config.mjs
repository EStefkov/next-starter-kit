import withMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Добавете тук вашите допълнителни конфигурации
};

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
})(nextConfig);

export default mdxConfig;
