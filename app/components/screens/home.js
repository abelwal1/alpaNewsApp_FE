import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import useNews from '../../hooks/useNews';
import Screen from '../common/screen';
import SearchBar from '../searchBar';
import FeaturedNews from '../featuredNews';
import BreakingNews from '../breakingNews';
import PoliticalNews from '../politicalNews';
import TechNews from '../techNews';
import EntertainmentNews from '../entertainmentNews';
import ActivityIndicator from '../common/activityIndicator';

const Home = () => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [
    featuredNews,
    politicalNews,
    entertainmentNews,
    techNews,
    breakingNews,
    loading,
  ] = useNews();

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen isSearchFocused={isSearchFocused}>
        <SearchBar setSearchFocused={setSearchFocused} />
        <FeaturedNews item={featuredNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
