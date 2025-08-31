import { watch } from "vue";
import useConfirmData from "./useConfirmData";

export default function useConfirm() {
  const { data, result, isOpen } = useConfirmData();

  function confirm(props: ConfirmFnProps) {
    data.value = props;
    isOpen.value = true;
    return new Promise((resolve) => {
      const unwatch = watch(
        () => isOpen.value,
        (open) => {
          if (open) return;
          unwatch();
          resolve(result.value);
        }
      );
    });
  }

  return confirm;
}
