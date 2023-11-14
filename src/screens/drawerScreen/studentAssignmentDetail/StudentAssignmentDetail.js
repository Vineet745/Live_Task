import {View, Text} from 'react-native';
import React from 'react';
import {studentAssignmentDetailStyle} from './studentAssignmentDetailStyle';
import {fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import StudentSelectionModal from '../../../components/modals/StudentSelectionModal';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {verticalScale} from '../../../constants/dimension';

const StudentAssignmentDetail = ({navigation,route}) => {
  const {params:{item}} = route;

  const handleNavigation = ()=>{
    navigation.navigate("Conversation",{item:item})
  }
  return (
    <View style={studentAssignmentDetailStyle.studentAssignmentMain}>
      <View style={studentAssignmentDetailStyle.studentDetailView}>
        <Text style={studentAssignmentDetailStyle.headerText}>
          Completion Status
        </Text>
        <Text
          style={{
            color: 'orange',
            fontFamily: fonts.medium,
            fontSize: RFValue(sizes.h6, 667),
          }}>
          In Progress
        </Text>
      </View>
      <View style={studentAssignmentDetailStyle.studentDetailView}>
        <Text style={studentAssignmentDetailStyle.headerText}>
          Last Updated
        </Text>
        <Text style={studentAssignmentDetailStyle.responseText}>
          2 Days Ago
        </Text>
      </View>
      <View style={studentAssignmentDetailStyle.studentDetailView}>
        <Text style={studentAssignmentDetailStyle.headerText}>Grade</Text>
        <Text style={studentAssignmentDetailStyle.responseText}>Good</Text>
      </View>
      <View style={studentAssignmentDetailStyle.studentDetailView}>
        <Text style={studentAssignmentDetailStyle.headerText}>Remark</Text>
        <Text style={studentAssignmentDetailStyle.responseText}>
          Remark given by chat gpt language model
        </Text>
      </View>
      <View onPress style={{marginTop: verticalScale(10)}}>
        <Mainbutton text="View Conversation" width={280} action={handleNavigation}/>
      </View>
    </View>
  );
};

export default StudentAssignmentDetail;
