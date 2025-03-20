import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProfileScreen = ({ user, onSignOut }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, {user.email}</Text>
            <Text style={styles.subtitle}>Birthdate: {user.birthdate}</Text>
            {/* Profile details can be edited here */}
            <TouchableOpacity style={styles.button} onPress={onSignOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        width: "80%",
        marginTop: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});

export default ProfileScreen;
