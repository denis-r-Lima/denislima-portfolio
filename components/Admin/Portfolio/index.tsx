import React, { useEffect, useState, useRef } from "react";
import { getAuth, getIdToken } from "firebase/auth";

import { useLoading } from "../../../context/LoadingContext";
import { uploadFile } from "../../../controllers/utils/fetchDatabase";

import { Container, HalfGrid } from "./styles";
import PortfolioCard from "./portfolioItemCard";
import { SaveButton } from "./styles";
import { AddButton } from "../Content/styles";
import EditModal from "./EditModal";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";

const Portfolio: React.FC = () => {
  const auth = getAuth();
  const { setLoadingData } = useLoading();
  const [newItem, setNewItem] = useState<PortfolioItemType>(
    {} as PortfolioItemType
  );
  const [portfolioItems, setPortfolioItems] =
    useState<PortfolioFetchResponseType>({} as PortfolioFetchResponseType);
  const [editIdx, setEditIdx] = useState<number>(0);
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
        const downloadUrl = await uploadFile(value, files[0]);
        setPortfolioItems((prevState) => ({
          ...prevState,
          items: [...prevState.items, { ...newItem, image: downloadUrl }],
        }));
        setNewItem({} as PortfolioItemType);
      } catch (e) {
        console.error(e);
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
            />
          </HalfGrid>
        </div>
        <div>
          <AddButton onClick={onAddItem}>+</AddButton>
        </div>
        <h2>Portfolio List</h2>
        {portfolioItems.items?.map((item, index) => (
          <div key={item.description}>
            <PortfolioCard
              item={item}
              onDelete={onDelete(index)}
              selectEdit={selectEdit(index)}
            />
          </div>
        ))}
        <SaveButton onClick={onSave}>Save</SaveButton>
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
