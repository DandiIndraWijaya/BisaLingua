// import React from 'react'
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { colors, fonts } from '../../../utils'
// import ButtonGoogle from './ButtonGoogle'
// import IconOnly from './IconOnly'
// import { ILPaymentMethod, ILArrowRight, ILChevronRightWhite, ILVouche, ILVoucher } from '../../../assets';
// import LinearGradient from 'react-native-linear-gradient';
// import { useSelector } from 'react-redux';

// const Button = ({type, title, onPress, icon, width, height}) => {
//   const state = useSelector(state => state)

//   if(type==='icon-only'){
//     return <IconOnly icon={icon} onPress={onPress}/>
//   }

//   if(type==='google'){
//     return <ButtonGoogle onPress={onPress} title={title}/>
//   }

//   if(type==='paymentMethod'){
//     return <TouchableOpacity actionOpacity={0.6} style={styles.container(type,width, height)} onPress={onPress}>
//       <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
//       <Text style={{ flex: 1, marginLeft: 20}}><ILPaymentMethod /></Text>
//       <Text style={{ flex: 10, color: state.paymentMethod.label === null ? '#7A7A7A' : '#292929', fontFamily: fonts.primary[300], fontSize: 14, marginTop: 4 }}> {state.paymentMethod.label === null ? 'Pilih Metode Pembayaran' : state.paymentMethod.label}</Text>
//       <Text style={{ flex: 1, marginTop: 4 }}><ILArrowRight /></Text>
//       </View>
//     </TouchableOpacity>
//   }

//   if(type==='voucher'){
//     return <TouchableOpacity actionOpacity={0.6} onPress={onPress}>
//       <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ED0A2A', '#F86278']} style={styles.container(type,width, height)}>
//         <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
//           <Text style={{ flex: 1, marginLeft: 20}}><ILVoucher /></Text>
//           <Text style={{ flex: 10, color: 'white', fontFamily: fonts.primary[300], fontSize: 14,  }}> Voucher Telah Digunakan</Text>
//           <Text style={{ flex: 1 }}><ILChevronRightWhite /></Text>
//         </View>
//       </LinearGradient>
//     </TouchableOpacity>
//   }

//   return (
//     <TouchableOpacity activeOpacity={0.6} style={styles.container(type,width, height)} onPress={onPress}>
//       <Text style={[styles.title(type),{textAlignVertical:'center'}]}>{title}</Text>
//     </TouchableOpacity>
//   )
// }

// export default Button

// const styles = StyleSheet.create({
//   container:(type, width, height)=> ({
//     backgroundColor:  type==='primary' ? colors.button.primary.background : (type == 'secondary' ? '#A3A3A3' : (type == 'paymentMethod' ? '#FAFAFA' : 'transparent')),
//     borderRadius:40,
//     borderWidth:1,
//     borderColor: type === 'third' ? colors.border : (type == 'secondary' || type == 'paymentMethod' ? 'transparent' : colors.button.primary.background),
//     justifyContent:'center',
//     width: width ? width : '100%',
//     height:height ? height : 48,
//   }),
//   title:(type)=>({
//     fontSize:14,
//     paddingVertical:8,
//     fontFamily:fonts.primary[400],
//     textAlign:'center',
//     color:type === 'primary' ? colors.button.primary.text : (type == 'third' ? colors.text.secondary : (type == 'secondary' ? colors.button.primary.text :  colors.button.secondary.text) ),
//     justifyContent:'center',
//     alignContent:'center',
//     textAlign:'center',
//   })
// })
