import { useModalStore } from "./useModalStore";
import { useEffect } from "react";

export const useHideBottomTab = (isUnmountedOpen = true) => {
  const { handleChangeBottomTabVisible } = useModalStore();

  useEffect(() => {
    handleChangeBottomTabVisible(false);
    return () => {
      if (isUnmountedOpen) {
        handleChangeBottomTabVisible(true);
      }
    };
  }, []);
};
