import { ReactNode } from "react";

interface Props{
  children: ReactNode; //it is special component that work with other component,or we can pass children to components
  onClose: () => void;
}

const Alert = ({children,onClose}:Props) => {
  return (
    <div className="alert alert-warning alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={
          onClose
        }
      ></button>
    </div>
  );
}

export default Alert