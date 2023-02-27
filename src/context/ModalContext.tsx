import { createContext, useState } from "react";

const ModalContext = createContext<any | null>(null);

const ModalProvider = ({ children }: any) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, setIsOpen, closeModal, openModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
