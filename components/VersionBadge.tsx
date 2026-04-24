export function VersionBadge({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const version = process.env.NEXT_PUBLIC_APP_VERSION || '0.0.0';
  const sha = process.env.NEXT_PUBLIC_BUILD_SHA || 'local';
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME || '';

  return (
    <span
      className="version-badge"
      data-variant={variant}
      title={buildTime ? `Built ${buildTime} UTC` : undefined}
    >
      <span className="version-num">v{version}</span>
      <span className="version-sha">{sha}</span>
    </span>
  );
}
