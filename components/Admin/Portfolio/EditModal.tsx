import React, { useState } from "react";
import { StyledInput } from "../Content/styles";

import { ModalContainer, Modal, StyledTextArea, SaveButton } from "./styles";

type EditModalType = {
  item: PortfolioItemType;
  onClose: () => void;
  onConfirm: (newItem: PortfolioItemType) => void;
};

const EditModal: React.FC<EditModalType> = ({ item, onClose, onConfirm }) => {
  const [localItem, setLocalItem] = useState<PortfolioItemType>(item);

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setLocalItem((prevState) => ({ ...prevState, [name]: value }));
  };

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    if (target === currentTarget) onClose();
  };
  return (
    <ModalContainer onClick={closeModal}>
      <Modal>
        <label>Description</label>
        <StyledTextArea
          value={localItem.description || ""}
          rows={5}
          name="description"
          onChange={onChange}
        />
        <label>Git Hub Link</label>
        <StyledInput
          value={localItem.gitHub || ""}
          name="github"
          onChange={onChange}
        />
        <SaveButton onClick={() => onConfirm(localItem)}>Confirm</SaveButton>
      </Modal>
    </ModalContainer>
  );
};

export default EditModal;
