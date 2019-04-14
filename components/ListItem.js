import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ListItem extends React.Component {
    render () {
       return (
       <View style={styles.listContainer}>
                <View style={styles.basicInfoContainer}>
                    <Text>Working</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Text>Image Container</Text>
                </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: 'column',
    }
});