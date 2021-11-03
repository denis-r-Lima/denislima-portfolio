import { useState } from "react";
import { useTheme } from "styled-components";

const useAlert = () => {
  const [message, setMessage] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const theme = useTheme();

  const setAlert = (message: string, type: "error" | "success") => {
    const colors = {
      error: theme.pallet.color.secondary,
      success: theme.pallet.color.primary,
    };
    setMessage(message);
    setColor(colors[type]);
    setTimeout(() => {
      setMessage("");
      setColor("");
    }, 4000);
  };

  return [message, color, setAlert] as const;
};

export default useAlert;
