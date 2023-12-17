export default function History({
  question,
  onClick,
}: {
  question: string;
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick}>
      <p className="capitalize cursor-pointer prompt">{question}...</p>
    </div>
  );
}
