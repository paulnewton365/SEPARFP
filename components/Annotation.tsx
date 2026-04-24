export function Annotation({ number, note }: { number: number | string; note: string }) {
  return (
    <span className="anno" data-note={note}>
      {number}
    </span>
  );
}
