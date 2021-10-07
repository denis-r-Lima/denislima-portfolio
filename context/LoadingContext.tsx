import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

type LoadingContextType = {
  loadingData: boolean;
  setLoadingData: Dispatch<SetStateAction<boolean>>;
};

const LoadingContext = createContext({} as LoadingContextType);

const LoadingProvider: React.FC = ({ children }) => {
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const value = { loadingData, setLoadingData };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
export default LoadingProvider;
