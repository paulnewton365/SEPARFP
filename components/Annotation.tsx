export function Annotation({
  number,
  note,
  direction = 'up',
}: {
  number: number | string;
  note: string;
  direction?: 'up' | 'down';
}) {
  return (
    <span className={`anno ${direction === 'down' ? 'anno-down' : ''}`} data-note={note}>
      {number}
    </span>
  );
}
