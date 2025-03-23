// AuthScreen.js
import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import logo from "./logo.png";



const AuthScreen = ({ onAuthenticated }) => {
    const { signUp, signIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(true);
    const [error, setError] = useState("");

    const handleAuth = async () => {
        try {
            setError("");
            if (isSignUp) {
                const user = await signUp(email, password);
                onAuthenticated(user, true);
            } else {
                const user = await signIn(email, password);
                onAuthenticated(user, false);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <View style={styles.container}>


            <Text style={styles.title}>{isSignUp ? "Sign Up" : "Sign In"}</Text>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            <TouchableOpacity style={styles.button} onPress={handleAuth}>
                <Text style={styles.buttonText}>{isSignUp ? "Sign Up" : "Sign In"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
                <Text style={styles.toggleText}>{isSignUp ? "Already have an account? Sign In" : "New user? Sign Up"}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    input: { width: "80%", padding: 10, margin: 5, borderWidth: 1, borderRadius: 5 },
    button: { backgroundColor: "#007BFF", padding: 10, width: "80%", marginTop: 10, borderRadius: 5, alignItems: "center" },
    buttonText: { color: "white", fontSize: 16 },
    error: { color: "red", marginBottom: 10 },
    toggleText: { marginTop: 10, color: "blue" },
});

export default AuthScreen;
