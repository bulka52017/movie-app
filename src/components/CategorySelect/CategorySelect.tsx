import React from "react";
import { useQueries } from "react-query";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { fetchServiceCategory } from "../../api/categories/api";
import { ALL_SERVICES } from "../../api/mockData/mockData";

type Props = {
  onCategorySelect: (category: string) => void;
  selectedCategory?: string;
};

const CategorySelect = ({ onCategorySelect, selectedCategory }: Props) => {
  const categoryQueries = useQueries(
    ALL_SERVICES.map((service, idx) => ({
      queryKey: ["category", idx + 1],
      queryFn: () => fetchServiceCategory(service),
      refetchOnWindowFocus: false,
    }))
  );

  const isCategoriesLoading = categoryQueries.some((q) => q.isLoading);
  const allCategories = React.useMemo(
    () =>
      !isCategoriesLoading
        ? Array.from(
            new Set(
              categoryQueries
                .map((serviceData) =>
                  serviceData.data ? serviceData.data : []
                )
                .flat()
            )
          )
        : [],
    [isCategoriesLoading, categoryQueries]
  );

  return (
    <FormControl fullWidth sx={{ maxWidth: 500 }}>
      <InputLabel id="movie-category-label">Category</InputLabel>
      <Select
        labelId="movie-category-label"
        id="movie-category"
        value={selectedCategory || ""}
        label="Category"
        disabled={isCategoriesLoading}
        onChange={(e) => onCategorySelect(e.target.value)}
      >
        {allCategories.map((cat) => (
          <MenuItem value={cat} key={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
