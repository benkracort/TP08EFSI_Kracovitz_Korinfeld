import { FlatList, StyleSheet, View } from "react-native";

import Story from "./Story";

export default function Stories({ posts }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Story
                        username={item.username}
                        image={item.image}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 0.5,
        borderBottomColor: "#DBDBDB",
        paddingVertical: 10,
    },
});