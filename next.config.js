/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix;
let basePath;

if (isGithubActions) {
  const repo = 'oskararslanov.github.io';
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,

};

module.exports = nextConfig;
