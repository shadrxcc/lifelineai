export default function History({
  question,
  onClick,
}: {
  question: string;
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick}>
      <p className="capitalize px-2 py-1 cursor-pointer prompt">
        {question}...
      </p>
    </div>
  );
}
