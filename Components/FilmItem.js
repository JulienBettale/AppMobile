import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class FilmItem extends React.Component {
    render() {
        {/*console.log(this.props);*/ }
        {/* Permet d'affiche l'objet film */ }
        const film = this.props.film
        return (
            <View style={styles.mainContainer}>
                <View style={styles.image} />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.titre}>{film.films.title}</Text>
                        <Text style={styles.vote}>{film.films.vote_average}</Text>
                    </View>
                    <View style={styles.descriptionView}>
                        <Text style={styles.description} numberOfLines={6}>{film.films.overview}</Text>
                        {/* numberOfLines permet de couper un texte si il dépasse la valeur renseignée */}
                    </View>
                    <View style={styles.date}>
                        <Text>Sorti le : {film.films.release_date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        flex: 1
    },
    image: {
        backgroundColor: '#666',
        margin: 5,
        height: 190,
        flex: 1
    },
    content: {
        margin: 5,
        flex: 2
    },
    header: {
        flexDirection: 'row',
        flex: 1
    },
    titre: {
        fontSize: 18,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        flex: 2
    },
    vote: {
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'right',
        paddingRight: 5
    },
    descriptionView: {
        flex: 2
    },
    description: {
        fontStyle: 'italic',
        color: '#999'
    },
    date: {
        flexDirection: 'row-reverse',
        flex: 1
    }
});