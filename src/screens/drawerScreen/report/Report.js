import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {reportStyle} from './reportStyle';
import {fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {viewReport} from '../../../service/api/assignmentApi';
import typescript from 'react-native-svg';
import {verticalScale} from '../../../constants/dimension';

const Report = ({route}) => {
  const {navigate} = useNavigation();
  const [report, setReport] = useState([]);
  const {
    params: {item},
  } = route;
  // View Report Navigation
  console.log('id', item?.class_assignment?.assignment_id);
  const updatedTime = item?.due_date_time
    ? item?.due_date_time.split('T')
    : null;

  useEffect(() => {
    handleReport();
  }, []);

  const handleReport = async () => {
    const id = item.id;
    try {
      const {data} = await viewReport(id);
      setReport(data.data.students_assignments);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <View style={reportStyle.reportMain}>
      <View style={reportStyle.taskDetail}>
        <Text style={reportStyle.taskName}>
          Task Name :- {item?.task?.show_name?item?.task?.show_name:"No Task Assigned"}
        </Text>
        <Text style={reportStyle.className}>
          Class Name :- {item?.class_assignment?.class.show_name?item?.class_assignment?.class.show_name:"No Class Assigned"}
        </Text>
        <Text style={reportStyle.dateText}>Due Date :- {updatedTime[0]} </Text>
      </View>
      <View style={reportStyle.studentStatusDetail}>
        <Text style={reportStyle.studentHeading}>Students</Text>
        <View style={{marginBottom: verticalScale(80)}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={report}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigate('Student Assignment Detail',{item:item})}
                  style={reportStyle.studentCard}>
                  <Text style={reportStyle.studentName}>
                    {item?.students[0].username}
                  </Text>
                  <Text
                    style={{
                      color: 'orange',     
                      fontFamily: fonts.medium,
                      fontSize: RFValue(sizes.h6, 667),
                    }}>
                    In Progress
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Report;
