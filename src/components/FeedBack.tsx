import Modal from "./Modal";
import ModalCard from "./ModalCard";

interface FeedBackProps {
  onClose: () => void;
}

const FeedBack = ({ onClose }: FeedBackProps) => {
  const submitFeedBack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };
  return (
    <Modal onClose={onClose}>
      <ModalCard className="gap-y-4" heading="Provide Feedback">
        <form
          onSubmit={submitFeedBack}
          className="w-full flex flex-col gap-y-4"
        >
          <textarea
            name=""
            id="feedback"
            placeholder="Tell us about your experience."
            className="px-4 py-2 text-base placeholder:text-base leading-6"
            cols={10}
            rows={2}
          ></textarea>
          <div className="flex justify-end w-full">
            <div className="flex items-center gap-x-2">
              <button
                id="cancel"
                onClick={onClose}
                className="px-6 py-2 leading-4 text-xs font-semibold rounded-lg gradient-text text-[#EDF8FF]"
              >
                <p id="cancel-text"> Cancel</p>
              </button>
              <button
                id="agree"
                className="px-6 rounded-lg text-white text-xs font-semibold leading-4 py-2"
              >
                Submit feedback
              </button>{" "}
            </div>
          </div>
        </form>
      </ModalCard>
    </Modal>
  );
};

export default FeedBack;
