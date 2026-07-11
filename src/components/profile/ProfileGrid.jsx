import { FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const IMAGE_SIZE = (width - 4) / 3;

export default function ProfileGrid({ posts, navigation }) {
    return (
        <FlatList
            data={posts}
            numColumns={3}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.item}
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate("Detail", { post: item })}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    item: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        margin: 0.5,
    },
    image: {
        width: "100%",
        height: "100%",
    },
});