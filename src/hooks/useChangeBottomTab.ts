import { useModalStore } from "./useModalStore";
import { useEffect } from "react";

export const useChangeBottomTab = ({
  isView = false,
  isUnmountedOpen = true,
}) => {
  const { handleChangeBottomTabVisible, isVisibleBottomTab } = useModalStore();

  useEffect(() => {
    handleChangeBottomTabVisible(isView);
    return () => {
      if (isUnmountedOpen && !isView) {
        handleChangeBottomTabVisible(true);
      }
    };
  }, []);

  return {
    isVisibleBottomTab,
  };
};
