import type { NextConfig } from 'next';

// GitHub Actions sets GITHUB_REPOSITORY as "owner/repository".
// This automatically configures the project path for a GitHub Pages project site.
const repositoryName = process.env.GITHUB_ACTIONS
  ? process.env.GITHUB_REPOSITORY?.split('/')[1]
  : undefined;

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(repositoryName ? { basePath: `/${repositoryName}` } : {}),
};

export default nextConfig;
