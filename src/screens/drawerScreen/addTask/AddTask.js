import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {addTaskStyle} from './addTaskStyle';
import {verticalScale} from '../../../constants/dimension';
import TaskIcon from '../../../assets/images/task_icon.svg';
import SubjectIcon from '../../../assets/images/subject_icon.svg';
import TaskFile from '../../../assets/images/create_task_file.svg';
import GalleryIcon from '../../../assets/images/gallery_icon.svg';
import LanguageDropdown from '../../../navigation/components/LanguageDropdown';
import {SwitchButton} from '../../../components/drawerComponent/SwitchButton';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {fonts} from '../../../constants/theme';
import CameraModal from '../../../components/modals/CameraModal';

const AddTask = () => {
  const {
    control,
    handelSubmit,
    formState: {errors},
  } = useForm();

  const [minimumAge, setMinimumAge] = useState('');
  const [maximumAge, setMaximumAge] = useState('');
  const [cameraOpen, setCameraOpen] = useState(false);
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [uri, setUri] = useState('');
  const [urls, setUrls] = useState([]);
  // Crop Picker open Gallery

  const openCameraModal = () => {
    setCameraOpen(true);
  };

  const closeCameraModal = () => {
    setCameraOpen(false);
  };

  // Open Gallery

  const handleOpenGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: true,
        cropperToolbarTitle: 'Crop Image',
        aspectRatio: [4, 4],
        quality: 1,
        multiple: true,
      });
      setUri(image.path);
      handleUserImage(userData, image);
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
      setUri(image.path);
      handleUserImage(userData, image);
      if (!image.cancelled) {
      } else {
        console.log('Image picker canceled');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update User Profile
  const handleUserImage = async (userData, image) => {
    const updatedUserData = {
      profile_image: image,
      username: userData.username,
    };

    try {
      await updateUserImage(updatedUserData);
    } catch (error) {
      console.log('error', error);
    }
  };

  // add Task

  const handelAddTask = data => {
    const query = {
      taskName: data.name,
      minimum_age: minimumAge,
      maximum_age: maximumAge,
      description: data.description,
      prompt: data.prompt,
      is_advanced: false,
      voice_only: false,
      // images:uri,
      is_shared: false,
      language: 'english',
      // urls:urls
    };
    try {
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
        style={{marginBottom: verticalScale(20)}}>
        <View style={{marginBottom: verticalScale(10)}}>
          <Controller
            control={control}
            name="name"
            rules={{required: 'Enter Task Name'}}
            defaultValue=""
            render={({field}) => (
              <View style={addTaskStyle.inputBoxView}>
                <TaskFile />
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={addTaskStyle.input}
                  placeholder="Enter Task Name"></TextInput>
              </View>
            )}></Controller>
          {errors.name && (
            <Text style={addTaskStyle.errorText}>Name is required</Text>
          )}
        </View>

        <View style={{marginBottom: verticalScale(10)}}>
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
          <Controller
            control={control}
            name="description"
            rules={{required: 'Enter Task Description'}}
            defaultValue=""
            render={({field}) => (
              <View style={addTaskStyle.inputBoxView}>
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={addTaskStyle.input}
                  placeholder="Add task description"></TextInput>
              </View>
            )}></Controller>
          {errors.name && (
            <Text style={addTaskStyle.errorText}>Name is required</Text>
          )}
        </View>

        <View style={addTaskStyle.linkView}>
          <View style={addTaskStyle.linkTopView}>
            <Text style={addTaskStyle.instructionText}>
              Add Task instruction / links
            </Text>
            <TouchableOpacity
              onPress={openCameraModal}
              style={addTaskStyle.galleryIcon}>
              <GalleryIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={addTaskStyle.linkBottomView}>
            <Text style={addTaskStyle.addLinkText}>Add Links</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: verticalScale(10)}}>
          <Controller
            control={control}
            name="prompt"
            rules={{required: 'Enter Task Description'}}
            defaultValue=""
            render={({field}) => (
              <View style={addTaskStyle.inputBoxView}>
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={addTaskStyle.input}
                  placeholder="Prompts for Chat GPT"></TextInput>
              </View>
            )}></Controller>
          {errors.name && (
            <Text style={addTaskStyle.errorText}>Name is required</Text>
          )}
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
          <SwitchButton />
        </View>

        <View>
          <Mainbutton text="Create Task" width={220} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddTask;
