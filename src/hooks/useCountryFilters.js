import { ref } from "@vue/composition-api";

export default function useCountryFilters() {
  const filter = ref("");

  const updateFilters = value => {
    filter.value = value;
  };

  return {
    filter,
    updateFilters
  };
}