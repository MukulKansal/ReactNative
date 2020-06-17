import React from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import {Form , Item , Input ,Label, Button} from 'native-base'

export default class SignupScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        name: '',
        email: "",
        password: ""
    }
}

static navigationOptions = {
    title: "SignIn",
    header: null
}

signupUser = ( name , email , password) => {
  firebase.auth().createUserWithEmailAndPassword(email ,password)
    .then(authenticate =>{  // authenticate is a obj about which we can read from docs.
      return authenticate.user
        .updateProfile({
          displayName: name
        })
        .then(()=>{
          this.props.navigation.navigate('Home')
        });
    })
    .catch(error =>{
      alert(error.message);
    })
}

  render(){
  return (
    <KeyboardAvoidingView>
    <View style={styles.logoContainer}>
      <Image 
        source={require('../assets/logo.png')}
      />
      <Text> Learn Code Online </Text>
    </View>
    <Form style={styles.form}>
    <Item floatingLabel>
        <label> name </label>
        <Input 
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='default'
          onChangeText={ name => this.setState({ name })}
        />
      </Item>
      <Item floatingLabel>
        <label> email </label>
        <Input 
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={ email => this.setState({ email})}
        />
      </Item>
      <Item floatingLabel>
      <label> password </label>
      <Input 
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType='email-address'
        onChangeText={ password => this.setState({ password })}
      />
    </Item>
    <Button style={styles.button} 
    full
    rounded
    onPress={()=>{
      this.signupUser(
        this.state.name,
        this.state.email,
        this.state.password,
      )
    }}
    >
      <Text style={styles.buttonText}> Sign in </Text>
    </Button>
    </Form>
    <View style={styles.footer}>
      <Text> OR </Text>
      <TouchableOpacity
        onPress={()=>{}}>
        <Text> Already having an Account? </Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    padding: 20,
    width: "100%"
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});