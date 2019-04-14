import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux'
import {getAlbumDataFromApi, searchAlbumData} from '../containers/async';
import {getSearchString} from '../containers/actions';
import { FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import { SearchBar } from 'react-native-elements';



export class AlbumListView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: null,
        }
    }
    
    componentDidMount() {
        const {loadAlbumsFromApi} = this.props;
        loadAlbumsFromApi();
    }

    _onPressOnAlbum = (item) => {
        Linking.openURL(item.url)
    }

    renderListItem = ({item}) => {
        return (
            <View style={styles.itemMainContainer}>
            <TouchableOpacity
         onPress={() => this._onPressOnAlbum(item)}
       >
                <View style={styles.itemTitleContainer}>
                  <View style={styles.thumbImageContainer}>
                    <Image
                    style={{width:50, height: 50}}
                    source={{uri: `${item.thumbnail_image}`}}
                    />
                  </View>
                  <View style={styles.titleContent}>
                    
                    <Text style={styles.albumTitle}>{item.title}</Text>
                    <Text style={styles.artistName}>{item.artist}</Text>
                  </View>
                </View>
                <View style={styles.coverImageContainer}>
               
                <Image
                    style={{width:'100%', height: 200}}
                    source={{uri: `${item.image}`}}
                    />
                </View>
                </TouchableOpacity>
            </View>
        )
    }

    albumItemSeperator = () => {
        return (
            <View style={styles.itemSeperator}></View>
        )
    }

    renderSearchBar = () => {
        return (
            <View>
               <View style={styles.headerContainer}>
                 <Text style={styles.headerTitle}>Albums</Text>
               </View>
               <View>
                <SearchBar
                    placeholder="Type Here"
                    lightTheme
                    round
                    onChangeText={text => this.searchAlbumFromList(text)}
                    autoCorrect= {false}
                    value={this.state.searchValue}
                />
               </View>
            </View>
           
        );
    }

    searchAlbumFromList = (text) => {
        const {albums, searchAlbumData, getSearchString} = this.props;
      //  getSearchString(text);
        this.setState({searchValue: text}, () => {
            searchAlbumData(text);
        });
        
    }
 
    render () {
    console.log('this is props', this.props);
       return (
        <View style={styles.listContainer}>
                
                <FlatList
                    data={this.props.albums}
                    renderItem={this.renderListItem}
                    keyExtractor={item => item.title}
                    ListHeaderComponent={this.renderSearchBar}
                    ItemSeparatorComponent={this.albumItemSeperator}
                 />
        </View>
       );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        alignSelf: 'stretch',
    },
    itemMainContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    },
    itemTitleContainer: {
        flexDirection: 'row'
    },
    itemSeperator: {
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE"
    },
    thumbImageContainer: {

    },
    coverImageContainer: {
        marginTop: 10,
    },
    albumTitle: {
       fontSize: 18,
       fontWeight: 'bold',
    },
    artistName: {

    },
    titleContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerContainer: {
        paddingTop: 10,
        paddingLeft: 5,
        height: 40,
        alignSelf: 'stretch',
        backgroundColor: '#eeeeee'
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});


const mapStateToProps = state => {
    return {
        albums: state.albumsReducers.albums,
        searchValue: state.albumsReducers.searchValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadAlbumsFromApi: () => dispatch(getAlbumDataFromApi()),
       // getSearchString: (searchString) => dispatch(getSearchString(searchString)),
        searchAlbumData: (searchString) => dispatch(searchAlbumData(searchString))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(AlbumListView)