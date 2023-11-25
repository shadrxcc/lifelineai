import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

interface BackdropProps {
  onClose: () => void;
}

const Backdrop: FC<BackdropProps> = (props) => {
  return <div onClick={props.onClose} className="backdrop-tour"></div>;
};

interface ModalOverlayProps {
  children: ReactNode;
}

const ModalOverlay: FC<ModalOverlayProps> = (props) => {
  return (
    <div className="modal">
      <div className="content w-full">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("tour") as HTMLElement;

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const TourModal: FC<ModalProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default TourModal;


// // Backdrop.propTypes = {
// //   onClose: PropTypes.func,
// // };

// // ModalOverlay.propTypes = {
// //   children: PropTypes.node,
// // };

// // Modal.propTypes = {
// //   onClose: PropTypes.func,
// //   children: PropTypes.node,
// // };
// // // validating proptypes