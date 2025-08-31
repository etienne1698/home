import { useState } from "#app/composables/state";

export type ConfirmFnProps = {
  title?: string;
  message: string;
  type?: "danger";
  confirmBtnText?: string;
};

export default function useConfirmData() {
  const isOpen = useState<boolean>("confirm-open", () => false);
  const result = useState<boolean | undefined>(
    "confirm-result",
    () => undefined
  );

  const data = useState<ConfirmFnProps | undefined>("confirm-data");

  return {
    isOpen,
    data,
    result,
  };
}
