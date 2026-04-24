const pkg = require('./package.json');

// Derive a compact build number from the build timestamp.
// Format: days-since-2026-01-01 (gives ~3-4 digit patch that naturally increments).
// This guarantees the patch changes on every rebuild without manual bumping.
const EPOCH = new Date('2026-01-01T00:00:00Z').getTime();
const daysSinceEpoch = Math.floor((Date.now() - EPOCH) / (1000 * 60 * 60 * 24));
const buildPatch = Math.max(0, daysSinceEpoch);

// The semantic major.minor comes from package.json.
// The patch is overwritten at build time with the auto-incrementing build number.
const [major, minor] = pkg.version.split('.');
const fullVersion = `${major}.${minor}.${buildPatch}`;

// Short git commit SHA (Vercel injects VERCEL_GIT_COMMIT_SHA automatically).
const commitSha =
  process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ||
  process.env.GITHUB_SHA?.slice(0, 7) ||
  'local';

// Build timestamp (ISO, truncated to minutes) for display.
const buildTime = new Date().toISOString().slice(0, 16).replace('T', ' ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_APP_VERSION: fullVersion,
    NEXT_PUBLIC_BUILD_SHA: commitSha,
    NEXT_PUBLIC_BUILD_TIME: buildTime,
  },
};

module.exports = nextConfig;
