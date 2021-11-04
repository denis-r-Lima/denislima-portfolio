import React, { useState } from "react";
import { useTheme } from "styled-components";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";

import { ModalContainer, Modal, SaveButton } from "./styles";

type EditModalType = {
  item: PortfolioItemType;
  onClose: () => void;
  onConfirm: (newItem: PortfolioItemType) => void;
};

const EditModal: React.FC<EditModalType> = ({ item, onClose, onConfirm }) => {
  const theme = useTheme();
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
          backgroundColor={theme.admin.color.base}
          color={theme.admin.color.baseDark}
          colorHover={theme.admin.color.baseDark}
          focusColor={theme.admin.color.baseDark}
        />
        <StyledInput
          value={localItem.gitHub || ""}
          name="github"
          title="GitHub Link"
          onChange={onChange}
          fullWidth
          backgroundColor={theme.admin.color.base}
          color={theme.admin.color.baseDark}
          colorHover={theme.admin.color.baseDark}
          focusColor={theme.admin.color.baseDark}
        />
        <StyledButton
          onClick={() => onConfirm(localItem)}
          color={theme.admin.color.baseDark}
          backgroundColor={theme.pallet.color.primaryVeryLight}
        >
          Confirm
        </StyledButton>
      </Modal>
    </ModalContainer>
  );
};

export default EditModal;
