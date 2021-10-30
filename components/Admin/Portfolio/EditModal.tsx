import React, { useState } from "react";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";

import { ModalContainer, Modal, SaveButton } from "./styles";

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
        <StyledInput
          value={localItem.description || ""}
          multiLine
          rows={5}
          fullWidth
          name="description"
          title="Description"
          onChange={onChange}
        />
        <StyledInput
          value={localItem.gitHub || ""}
          name="github"
          title="GitHub Link"
          onChange={onChange}
          fullWidth
        />
        <SaveButton onClick={() => onConfirm(localItem)}>Confirm</SaveButton>
      </Modal>
    </ModalContainer>
  );
};

export default EditModal;
