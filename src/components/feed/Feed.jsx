import { FlatList, StyleSheet } from "react-native";

import PostCard from "./PostCard";

export default function Feed({ posts, navigation }) {
    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <PostCard
                    post={item}
                    navigation={navigation}
                />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
    },
});