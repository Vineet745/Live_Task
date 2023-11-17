import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Delete from '../../../assets/images/delete_icon.svg';
import Edit from '../../../assets/images/pink_edit.svg';
import {useNavigation} from '@react-navigation/native';
import DataDeleteModal from '../../modals/DataDeleteModal';
import {useDispatch, useSelector} from 'react-redux';
import {taskCardStyle} from './taskCardStyle';
import {SwitchButton} from '../SwitchButton';
import {verticalScale} from '../../../constants/dimension';
import { toggleButton } from '../../../service/api/homeApi';

const TaskCard = ({item, handleGetTask}) => {
  const [open, setOpen] = useState(false);
  const {navigate} = useNavigation();
 const {isEnabled} = useSelector(state=>state.switch)


  // handleOpen

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // toggle Button

  
  return (
    <TouchableOpacity
    onPress={() => navigate('Single Task', { id: item.id, item:item, })}

      style={taskCardStyle.dashboardTaskMain}>
      <DataDeleteModal open={open} closeModal={handleClose} />
      <View style={taskCardStyle.topView}>
        <View style={taskCardStyle.lefttopView}>
          <Text style={taskCardStyle.taskNameText}>{item.show_name.substring(0, 20)} ...</Text>
          <Text style={taskCardStyle.yearsText}>
            {item.minimum_age} yrs to {item.maximum_age} yrs
          </Text>
          <Text style={taskCardStyle.subjectText}>
            {item?.subject?.subject_name}
          </Text>
        </View>
        <View style={taskCardStyle.righttopView}>
          <View style={taskCardStyle.languageContainer}>
            <Text style={taskCardStyle.languageText}>{item.language}</Text>
          </View>
          <View
            style={{
              height: verticalScale(40),
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={taskCardStyle.sharedText}>
              {item.is_shared === true ? 'Shared' : 'Not-Shared'}
            </Text>
            <SwitchButton item={item} handleGetTask={handleGetTask}/>
          </View>
        </View>
      </View>
      <View style={taskCardStyle.bottomView}>
        <View style={taskCardStyle.bottomViewInnerView}></View>
        <View style={taskCardStyle.buttonContainer}>
          <View style={taskCardStyle.iconTextContainer}>
            <TouchableOpacity
              onPress={() => navigate('Edit Student')}
              style={taskCardStyle.buttons}>
              <Edit />
            </TouchableOpacity>
          </View>
          <View style={taskCardStyle.iconTextContainer}>
            <TouchableOpacity
              onPress={handleOpen}
              style={taskCardStyle.buttons}>
              <Delete />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
