import React from 'react'
import { SafeAreaView, View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'A',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'B',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'C',
    },
];

const Item = (item) => (
    <FilmItem film={item} />
);

export default class Search extends React.Component {
    render() {
        const renderItem = ({ item }) => (
            <Item films={item} />
        );

        return (
            <SafeAreaView style={styles.mainContainer}>
                <TextInput style={styles.searchInput} placeholder="Entrez un titre" />
                <Button title="Recherche" onPress={() => { }} />
                <FlatList
                    data={films}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 0
    },
    searchInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#999',
        borderWidth: 1,
        paddingLeft: 5,
        borderRadius: 10
    },
});