import loading_spinner from "/rolling.svg";

const Button = ({
  title,
  isLoading = false,
}: {
  title: string;
  isLoading?: boolean;
}) => {
  return (
    <button
      type="submit"
      className={`button flex items-center justify-center ${
        isLoading ? "" : "gradient"
      }`}
      disabled={isLoading}
    >
      {!isLoading && (
        <span className="p-3 text-base font-semibold">{title}</span>
      )}
      {isLoading && (
        <img src={loading_spinner} alt="Loding spinner" className="w-12" />
      )}
    </button>
  );
};

export default Button;
