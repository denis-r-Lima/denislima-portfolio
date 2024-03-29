import React, { useEffect, useState, useRef } from "react";
import { getAuth, getIdToken } from "firebase/auth";

import { useLoading } from "../../../context/LoadingContext";
import { uploadFile } from "../../../utils/fetchDatabase";

import { Container, HalfGrid } from "./styles";
import PortfolioCard from "./portfolioItemCard";
import EditModal from "./EditModal";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";
import DraggableDiv from "../../StyledComponents/DraggableDiv/DraggableDiv";
import { useTheme } from "styled-components";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";

const Portfolio: React.FC = () => {
  const auth = getAuth();
  const theme = useTheme();
  const { setLoadingData } = useLoading();
  const [newItem, setNewItem] = useState<PortfolioItemType>(
    {} as PortfolioItemType
  );
  const [portfolioItems, setPortfolioItems] =
    useState<PortfolioFetchResponseType>({} as PortfolioFetchResponseType);
  const [editIdx, setEditIdx] = useState<number>(0);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchFromStore = async () => {
    try {
      setLoadingData(true);
      const result = await fetch("/api/portfolio_handler");
      const data = await result.json();
      setPortfolioItems(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchFromStore();
  }, []);

  const onDelete = (index: number) => () => {
    setPortfolioItems((prevState) => {
      const newItems = prevState.items.filter((_, idx) =>
        idx === index ? false : true
      );
      return { ...prevState, items: newItems };
    });
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewItem((prevState) => ({ ...prevState, [name]: value }));
  };

  const onAddItem = async () => {
    if (fileRef.current!.files[0]?.type.startsWith("image")) {
      const { files, value } = fileRef.current!;
      try {
        setLoadingData(true);
        const downloadUrl = await uploadFile(value, files[0]);
        setPortfolioItems((prevState) => ({
          ...prevState,
          items: [...prevState.items, { ...newItem, image: downloadUrl }],
        }));
        setNewItem({} as PortfolioItemType);
        fileRef.current.value = "";
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingData(false);
      }
    }
  };

  const onSave = async () => {
    const token = await getIdToken(auth.currentUser);
    try {
      setLoadingData(true);
      await fetch("/api/portfolio_handler", {
        method: "PUT",
        body: JSON.stringify({ data: portfolioItems, token }),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };

  const selectEdit = (idx: number) => () => {
    setEditIdx(idx + 1);
  };

  const onConfirmEdit = (newItem: PortfolioItemType) => {
    setPortfolioItems((prevState) => ({
      ...prevState,
      items: prevState.items.map((item, index) =>
        index === editIdx - 1 ? newItem : item
      ),
    }));
    setEditIdx(0);
  };

  const onDragStart = (index: number) => () => {
    setDragIndex(index);
  };

  const onDrop = (index: number) => () => {
    const newOrder = portfolioItems.items.filter((_, idx) => idx !== dragIndex);
    const newIndex = index > dragIndex ? index - 1 : index;
    newOrder.splice(newIndex, 0, portfolioItems.items[dragIndex]);
    setPortfolioItems((prevState) => ({ ...prevState, items: newOrder }));
    setDragIndex(null);
  };

  return (
    <>
      <Container>
        <div>
          <StyledInput
            name="gitHub"
            title="GitHub Link"
            value={newItem.gitHub || ""}
            onChange={onChange}
            fullWidth
            backgroundColor={theme.admin.color.base}
            color={theme.admin.color.baseDark}
            colorHover={theme.admin.color.baseDark}
            focusColor={theme.admin.color.baseDark}
          />
        </div>
        <div>
          <StyledInput
            name="description"
            title="Description"
            multiLine
            rows={5}
            fullWidth
            value={newItem.description || ""}
            onChange={onChange}
            backgroundColor={theme.admin.color.base}
            color={theme.admin.color.baseDark}
            colorHover={theme.admin.color.baseDark}
            focusColor={theme.admin.color.baseDark}
          />
        </div>
        <div>
          <HalfGrid>
            <StyledInput
              title="Image"
              name="image"
              type="file"
              ref={fileRef}
              fullWidth
              backgroundColor={theme.admin.color.base}
              color={theme.admin.color.baseDark}
              colorHover={theme.admin.color.baseDark}
              focusColor={theme.admin.color.baseDark}
            />
          </HalfGrid>
        </div>
        <div>
          <StyledButton
            onClick={onAddItem}
            color={theme.admin.color.baseDark}
            backgroundColor={theme.admin.color.secondaryLight}
          >
            Add
          </StyledButton>
        </div>
        <h2>Portfolio List</h2>
        {portfolioItems.items?.map((item, index) => (
          <DraggableDiv
            key={item.description}
            startDrag={onDragStart(index)}
            action={onDrop(index)}
          >
            <PortfolioCard
              item={item}
              onDelete={onDelete(index)}
              selectEdit={selectEdit(index)}
            />
          </DraggableDiv>
        ))}
        <StyledButton
          onClick={onSave}
          color={theme.admin.color.baseDark}
          backgroundColor={theme.admin.color.primaryVeryLight}
        >
          Save
        </StyledButton>
      </Container>
      {editIdx && (
        <EditModal
          item={portfolioItems.items[editIdx - 1]}
          onClose={() => setEditIdx(0)}
          onConfirm={onConfirmEdit}
        />
      )}
    </>
  );
};

export default Portfolio;
