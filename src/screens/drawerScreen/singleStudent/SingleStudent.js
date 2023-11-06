import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {singleStudentStyle} from './singleStudentStyle';
import StudentClassCard from '../../../components/drawerComponent/studentClassCard/StudentClassCard';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {verticalScale} from '../../../constants/dimension';
import DeleteWhite from '../../../assets/images/white_delete.svg';
import BackButton from '../../../assets/images/back_arrow_button.svg';
import {useNavigation} from '@react-navigation/native';
import ImageEdit from '../../../assets/images/image_edit.svg';

const SingleStudent = () => {
  const navigation = useNavigation();

  return (
    <View style={singleStudentStyle.singleStudentMain}>
      <View style={singleStudentStyle.singleStudentInner}>
        <View style={singleStudentStyle.singleStudentHeader}>
          <View style={singleStudentStyle.singleStudentLeftView}>
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
            <Text style={singleStudentStyle.detailText}>Details</Text>
          </View>
          <View style={singleStudentStyle.singleStudentRightView}>
            <TouchableOpacity onPress={()=>navigation.navigate("Edit Student")} style={singleStudentStyle.profileEditButton}>
              <Text style={singleStudentStyle.profileEditText}>Edit</Text>
              <ImageEdit />
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'black', borderRadius: 50, padding: 3}}>
              <DeleteWhite />
            </TouchableOpacity>
          </View>
        </View>
        <View style={singleStudentStyle.singleStudentDetails}>
          <View style={singleStudentStyle.studentDetailView}>
            <Text style={singleStudentStyle.studentName}>Student Name</Text>
          </View>

          <View style={singleStudentStyle.studentDetailView}>
            <Text style={singleStudentStyle.studentName}>
              mariaNolan001@gmail.com
            </Text>
          </View>

          <View>
            <StudentClassCard />
            <StudentClassCard />
            <StudentClassCard />
          </View>
          <View style={{marginVertical: verticalScale(10)}}>
            <Mainbutton width={270} text="Assign to Class" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleStudent;
