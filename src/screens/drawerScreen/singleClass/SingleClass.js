import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DeleteWhite from '../../../assets/images/white_delete.svg';
import BackButton from '../../../assets/images/back_arrow_button.svg';
import {useNavigation} from '@react-navigation/native';
import ImageEdit from '../../../assets/images/image_edit.svg';
import {singleClassStyle} from './singleClassStyle';
import RightArrow from '../../../assets/images/right_arrow.svg';
import {verticalScale} from '../../../constants/dimension';

const SingleClass = ({route}) => {
  const {
    params: {item, id},
  } = route;


  const navigation = useNavigation();

  return (
    <View style={singleClassStyle.singleCLassMain}>
      <View style={singleClassStyle.singleClassInner}>
        <View style={singleClassStyle.singleClassHeader}>
          <View style={singleClassStyle.singleClassLeftView}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: '#f7f7f7',
                elevation: 1,
              }}>
              <BackButton width={32} height={32} />
            </TouchableOpacity>
            <Text style={singleClassStyle.detailText}>Details</Text>
          </View>
          <View style={singleClassStyle.singleClassRightView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Edit Class', {item: item})}
              style={singleClassStyle.profileEditButton}>
              <Text style={singleClassStyle.profileEditText}>Edit</Text>
              <ImageEdit />
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'black', borderRadius: 50, padding: 3}}>
              <DeleteWhite />
            </TouchableOpacity>
          </View>
        </View>
        <View style={singleClassStyle.classDetail}>
          <Text style={singleClassStyle.className}>{item.show_name}</Text>
          <View style={{marginVertical: verticalScale(10)}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Class Assignment', {id: id})}
              style={singleClassStyle.classChildView}>
              <Text style={singleClassStyle.classChildViewText}>
                Assignments
              </Text>
              <RightArrow />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Class Student', {id: id,item:item})}
              style={singleClassStyle.classChildView}>
              <Text style={singleClassStyle.classChildViewText}>Students</Text>
              <RightArrow />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleClass;
