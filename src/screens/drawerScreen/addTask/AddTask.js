import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {addTaskStyle} from './addTaskStyle';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import TaskIcon from '../../../assets/images/task_icon.svg';
import SubjectIcon from '../../../assets/images/subject_icon.svg';
import TaskFile from '../../../assets/images/create_task_file.svg';
import GalleryIcon from '../../../assets/images/gallery_icon.svg';
import LanguageDropdown from '../../../navigation/components/LanguageDropdown';
import {SwitchButton} from '../../../components/drawerComponent/SwitchButton';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {fonts} from '../../../constants/theme';
import CameraModal from '../../../components/modals/CameraModal';
import SubjectDropdown from '../../../navigation/components/SubjectDropdown';
import {createTask} from '../../../service/api/homeApi';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

const AddTask = ({navigation}) => {
  const {
    control,
    handelSubmit,
    formState: {errors},
  } = useForm();

  const [minimumAge, setMinimumAge] = useState('');
  const [maximumAge, setMaximumAge] = useState('');
  const [cameraOpen, setCameraOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false)
  const [value, setValue] = useState(null);
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [taskName, setTaskName] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [uri, setUri] = useState([]);
  const [instructionUrl, setInstructionUrl] = useState("");
  const [items, setItems] = useState([
    {id: 1, label: 'Hindi', value: 'Hindi'},
    {id: 2, label: 'English', value: 'English'},
    {id: 3, label: 'Science', value: 'Science'},
    {id: 4, label: 'Maths', value: 'Maths'},
    {id: 5, label: 'Sanskrit', value: 'Sanskrit'},
  ]);
const {navigate} = useNavigation()

  // Crop Picker open Gallery

  const openCameraModal = () => {
    setCameraOpen(true);
  };

  const closeCameraModal = () => {
    setCameraOpen(false);
  };

  // GettingId

  const id = items.find(item => item.value === value);


  // All images Path

  const pathArray = uri?.map((item)=>item.path)
  // Open Gallery


  const handleOpenGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: true,
        cropperToolbarTitle: 'Crop Image',
        aspectRatio: [4, 4],
        quality: 1,
        multiple:true
      });
      setUri(image);
      // handleUserImage(userData, image);
      if (!image.cancelled) {
      } else {
        console.log('Image picker canceled');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Open Camera

  const handleOpenCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        mediaType: 'photo',
        cropping: true,
        cropperToolbarTitle: 'Crop Image',
        aspectRatio: [4, 4],
        quality: 1,
      });
      setUri(image);
      // handleUserImage(userData, image);
      if (!image.cancelled) {
      } else {
        console.log('Image picker canceled');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update User Profile
  // const handleUserImage = async (userData, image) => {
  //   const updatedUserData = {
  //     profile_image: image,
  //     username: userData.username,
  //   };

  //   try {
  //     await updateUserImage(updatedUserData);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  // add Task
  
  


  const handelAddTask = async () => {
    const query = {
      subject_id: id?.id,
      taskName: taskName,
      minimum_age: parseInt(minimumAge),
      maximum_age: parseInt(maximumAge),
      language: 'English',
      is_shared: false,
      description: description,
      prompt: prompt,
      voice_only: false,
      is_advanced: false,
      content:content || "",
      images:pathArray || "",
      urls:instructionUrl || ""

    };
    try {
      const data = await createTask({query});
       navigation.navigate("All Tasks",{screen:"My Tasks"})
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={addTaskStyle.addTaskMain}>
      <CameraModal
        open={cameraOpen}
        closeModal={closeCameraModal}
        openGallery={handleOpenGallery}
        openCamera={handleOpenCamera}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        >
        <View style={{marginBottom: verticalScale(10)}}>
          <View style={addTaskStyle.inputBoxView}>
            <TaskFile />
            <TextInput
              value={taskName}
              onChangeText={val => setTaskName(val)}
              placeholderTextColor={'grey'}
              style={addTaskStyle.input}
              placeholder="Enter Task Name"></TextInput>
          </View>
        </View>

        {/* <View style={{marginBottom: verticalScale(10)}}>
          <Controller
            control={control}
            name="name"
            rules={{required: 'Enter Task Name'}}
            defaultValue=""
            render={({field}) => (
              <View style={addTaskStyle.inputBoxView}>
                <SubjectIcon />
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={addTaskStyle.input}
                  placeholder="Subject"></TextInput>
              </View>
            )}></Controller>
          {errors.name && (
            <Text style={addTaskStyle.errorText}>Name is required</Text>
          )}
        </View> */}

        <View style={{backgroundColor:"#f3f3f3",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderWidth:1,borderRadius:10,borderColor:"grey",zIndex:100}}>
          <View style={{width:horizontalScale(45),alignItems:"center",justifyContent:"center"}}>
        <SubjectIcon />
          </View>
          <View >  
          <SubjectDropdown
            width={300}
            value={value}
            setValue={setValue}
            marginRight={0}
            text="Subject"
            items={items}
            setItems={setItems}
          />
          </View>
        </View>

        <View style={addTaskStyle.ageView}>
          <View>
            <Text style={{fontFamily: fonts.medium}}>Minimum Age</Text>
            <TextInput
              placeholder="00"
              style={addTaskStyle.ageInput}
              value={minimumAge}
              onChangeText={val => setMinimumAge(val)}
            />
          </View>
          <View>
            <Text style={{fontFamily: fonts.medium}}>Maximum Age</Text>
            <TextInput
              placeholder="00"
              style={addTaskStyle.ageInput}
              value={maximumAge}
              onChangeText={val => setMaximumAge(val)}
            />
          </View>
        </View>

        <View style={{marginBottom: verticalScale(10)}}>
          <View style={addTaskStyle.inputBoxView}>
            <TextInput
              value={description}
              onChangeText={val => setDescription(val)}
              placeholderTextColor={'grey'}
              style={addTaskStyle.input}
              placeholder="Add task description"></TextInput>
          </View>
        </View>

        <View style={addTaskStyle.linkView}>
          <View style={addTaskStyle.linkTopView}>
            <TextInput
              value={content}
              onChangeText={(val)=>setContent(val)}
              placeholder="Add Task Instruction/links"
              style={addTaskStyle.instructionText}></TextInput>
            <TouchableOpacity
              onPress={openCameraModal}
              style={addTaskStyle.galleryIcon}>
              <GalleryIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={addTaskStyle.linkBottomView}>
            <TextInput  placeholder='Add Links' placeholderTextColor="black" value={instructionUrl} onChangeText={(val)=>setInstructionUrl(val)} style={addTaskStyle.addLinkText}/>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: verticalScale(10)}}>
          <View style={addTaskStyle.inputBoxView}>
            <TextInput
              value={prompt}
              onChangeText={val => setPrompt(val)}
              placeholderTextColor={'grey'}
              style={addTaskStyle.input}
              placeholder="Prompts for Chat GPT"></TextInput>
          </View>
        </View>

        <View style={addTaskStyle.dropDownView}>
          <LanguageDropdown
            width={140}
            text="English"
            marginRight={0}
            backgroundColor="#f3f3f3"
          />
          <LanguageDropdown
            width={140}
            text="Model"
            marginRight={0}
            backgroundColor="#f3f3f3"
          />
        </View>

        <View style={addTaskStyle.voiceOnlyOptionView}>
          <Text style={addTaskStyle.voiceOnlyTask}>Voice Only</Text>
          {/* <SwitchButton isEnabled={isEnabled} /> */}
        </View>

        <View>
          <Mainbutton text="Create Task" width={220} action={handelAddTask} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddTask;
