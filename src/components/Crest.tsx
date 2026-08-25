export function Crest({ className }: { className?: string }) {
  return (
    <img
      className={className}
      src="/crest.png"
      alt="Герб Deep Forest Academy"
      draggable={false}
    />
  );
}
