import {View, Text, FlatList,TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect,useState} from 'react';
import {conversationStyle} from './conversationStyle';
import {conversation} from '../../../service/api/assignmentApi';
import {horizontalScale, verticalScale} from '../../../constants/dimension';

const Conversation = ({route}) => {
    const [conversationChat, setConversationChat] = useState([])
    const [chatText, setChatText] = useState()
  const {
    params: {item},
  } = route;

  useEffect(() => {
    handleGetConversation();
  }, []);

  // Get Conversation

  const handleGetConversation = async () => {
    const query = {
      assignment_id: item.assignment_id,
      student_id: item.student_id,
    };
    try {
      const {data} = await conversation({query});
      setConversationChat(data.data)
      //   console.log("Data",JSON.stringify(data.data))
    } catch (error) {
      console.log('error', error);
    }
  };



  return (
    <View style={conversationStyle.conversationMain}>
      <FlatList
    data={conversationChat}
        renderItem={({item}) => {
          return (
            <View style={{flex:1}}>
              <View style={conversationStyle.promptMessage}>
                <Text style={conversationStyle.promptText}>{item?.prompt}</Text>
              </View>
              <View style={conversationStyle.responseMessage}>
                <Text style={conversationStyle.responseText}>{item?.response}</Text>
              </View>
            </View>
          );
        }}
      />
     
    </View>
  );
};

export default Conversation;
