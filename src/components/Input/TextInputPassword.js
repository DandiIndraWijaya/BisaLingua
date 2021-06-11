import React,{useState} from 'react';
import {StyleSheet,TextInput,TouchableOpacity, View, Text} from 'react-native';
import { ILBeranda, ILBerandaActive, ILInvisible, ILVisible } from '../../../assets';
import { colors, fonts } from '../../../utils';

const TextInputPassword = ({
    label, 
    type, 
    value, 
    onChangeText,
    onPress,
    isSecure
  }) => {

  const [border, setBorder] = useState(colors.border)
    
  const Label=()=>{
    if(type === 'label'){
      return (<Text style={styles.label}>{label}</Text>)
    }
    return <></>
  }

  const onFocusForm = () => {
    setBorder(colors.primary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };

  return (
    <View>
      <Label/>
      <View style={styles.wrapper(border)}>
        <TextInput
          style={styles.input}
          placeholder={label}
          secureTextEntry={isSecure}
          value={value}
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          onChangeText={onChangeText}
        />
        <TouchableOpacity
        onPress={onPress}
        style={styles.touachableButton}>
          {isSecure ? <ILVisible style={styles.buttonImage}/> : <ILInvisible style={styles.buttonImage}/> }
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TextInputPassword

const styles = StyleSheet.create({
  wrapper:(border)=>({
    borderRadius:4,
    borderWidth:1,
    borderColor:border,
    paddingHorizontal:6,
    // paddingVertical:10,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#f9f9f9'
  }),
  input:{
    flex:1,
    paddingLeft:4,
    height:42,
    fontSize:15
  },
  label:{
    fontSize:16,
    color:colors.text.primary,
    marginBottom:2,
    fontFamily:fonts.primary[400],
  },
  touachableButton: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 2,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
});
