import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useQueries } from "react-query";

import { ALL_SERVICES } from "./api/mockData/mockData";
import { fetchMovies } from "./api/movies/api";
import "./App.css";

import CategorySelect from "./components/CategorySelect/CategorySelect";
import MoviesListItem from "./components/MoviesListItem/MoviesListItem";

const App = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("");

  const movieQueries = useQueries(
    ALL_SERVICES.map((service, idx) => ({
      queryKey: ["movies", `${selectedCategory}${idx}`],
      // for error handling test
      // queryFn: () => fetchMovies(service, selectedCategory, idx % 2 === 0),
      // queryFn: () => fetchMovies(service, selectedCategory, true),
      queryFn: () => fetchMovies(service, selectedCategory),
      enabled: selectedCategory.length > 0,
      refetchOnWindowFocus: false,
    }))
  );

  const isMoviesLoading = movieQueries.some((q) => q.isLoading);
  const isAllFailed = movieQueries.every((q) => q.isError);

  const movies = !isMoviesLoading
    ? movieQueries
        .filter((query) => !query.isError)
        .map((serviceData) => (serviceData.data ? serviceData.data : []))
        .flat()
    : null;

  const onSelect = React.useCallback(
    (category: string) => setSelectedCategory(category),
    []
  );

  const renderMovies = React.useMemo(() => {
    if (!selectedCategory)
      return (
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6">
            Select category to see recommendations
          </Typography>
        </Grid>
      );
    if (isMoviesLoading)
      return (
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Grid>
      );
    if (isAllFailed)
      return (
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Alert severity="error">
            Error while fetching recommendations, check your internet
            connection.
          </Alert>
        </Grid>
      );
    if (!isMoviesLoading && !movies)
      return (
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Alert severity="info">
            We could't find movies matching your criteria
          </Alert>
        </Grid>
      );

    return movies?.map((movie) => (
      <Grid item xs={12} sm={6} md={3} key={`${movie.title}-${movie.id}`}>
        <MoviesListItem {...movie} />
      </Grid>
    ));
  }, [isMoviesLoading, movies, selectedCategory, isAllFailed]);

  return (
    <Container sx={{ padding: 10, height: "100vh" }}>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          marginBottom: "30px",
        }}
      >
        <Stack spacing={3} maxWidth={500}>
          <Typography variant="h5">Select movie category</Typography>
          <CategorySelect
            onCategorySelect={onSelect}
            selectedCategory={selectedCategory}
          />
        </Stack>
      </Box>
      <Divider orientation="horizontal" flexItem sx={{ marginBottom: 2 }}>
        Recommendations
      </Divider>
      <Grid container spacing={2}>
        {renderMovies}
      </Grid>
    </Container>
  );
};

export default App;
