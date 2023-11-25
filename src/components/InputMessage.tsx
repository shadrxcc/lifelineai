const InputMessage = ({
  inputValue,
  setInputValue,
  onSubmit
}: {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) => {
  return (
    <div className="space-y-3">
      <div className="flex max-w-[90%] sm:max-w-[80%] mx-auto">
        <div className="flex flex-1 items-center gap-x-3">
          <button className="flex items-center py-1.5 text-sm leading-5 text-[#585858]  px-3 bg-[#EEE] rounded-lg gap-x-2.5">
            <img src="/translate.svg" alt="" /> Translate
          </button>
          <button className="flex items-center py-1.5 text-sm leading-5 text-[#585858]  px-3 bg-[#EEE] rounded-lg gap-x-2.5">
            <img src="/stars.svg" alt="" />
            Improve
          </button>
        </div>

        <div className="flex-1 hidden sm:block"></div>
      </div>
      <form onSubmit={onSubmit} className="max-w-[90%] sm:max-w-[80%] mx-auto">
        <div className="flex items-center mb-9 gap-x-2  rounded-lg w-full bottom-0 m-auto justify-between px-4 py-3 border border-[#E7E7E7]">
          <img src="/attachment.svg" alt="" />
          <input
            type="text"
            name="message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Tell me your symptom"
            className="text-[#919191] bg-transparent outline-none text-base w-full"
            id="message"
          />
          <button>
            <img src="/send.svg" alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputMessage;
