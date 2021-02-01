import { ref, computed } from "@vue/composition-api";

export default function useCountryNameSearch(countries) {
  const searchQuery = ref("");

  const search = event => {
    searchQuery.value = event;
  };

  const countriesMatchingSearchQuery = computed(() => {
    return countries.value.filter(country => {
      return country.name.toLowerCase().includes(searchQuery.value);
    });
  });

  return {
    searchQuery,
    search,
    countriesMatchingSearchQuery
  };
}