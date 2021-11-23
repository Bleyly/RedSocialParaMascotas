import * as React from "react";
import { Searchbar as PaperSearchbar } from "react-native-paper";

const Searchbar = () => {
	const [searchQuery, setSearchQuery] = React.useState("");

	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<PaperSearchbar
			placeholder="Search"
			onChangeText={onChangeSearch}
			value={searchQuery}
		/>
	);
};

export default Searchbar;
