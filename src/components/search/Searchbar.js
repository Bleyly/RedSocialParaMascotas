import * as React from "react";
import { Searchbar as PaperSearchbar } from "react-native-paper";

const Searchbar = React.memo(({ setFilter }) => {
  const [searchText, setSearchText] = React.useState("");

  const handleSearch = () => {
    setFilter((prevFilter) => ({ ...prevFilter, searchText }));
  };

  return (
    <PaperSearchbar
      onSubmitEditing={handleSearch}
      placeholder="Search"
      onChangeText={setSearchText}
      value={searchText}
      onIconPress={handleSearch}
    />
  );
});

export default Searchbar;
