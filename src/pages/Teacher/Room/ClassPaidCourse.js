import React, {useState, useEffect} from 'react';
import Header from '../../../components/Header';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import MontserratText from '../../../components/MontserratText';
import {Card, Divider} from 'react-native-elements';
import Input from '../../../components/Input/TextInput';
import color from '../../../style/color';
import YouTube from 'react-native-youtube';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faShare} from '@fortawesome/free-solid-svg-icons';

const ClassPaidCourse = ({navigation}) => {
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState('');
  const [quality, setQuality] = useState('');
  const [error, setError] = useState('');
  const [likes, setLikes] = useState(140);
  const [commentInput, setCommentInput] = useState('');
  const [isLike, setIsLike] = useState(false);
  const [comments, setComments] = useState([
    {
      name: 'Arman',
      date: '1 hari yang lalu',
      comment: 'Keren bisa cepet paham',
      image:
        'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      name: 'DInda',
      date: '1 hari yang lalu',
      comment: 'Bagus banget penjelannya',
      image:
        'https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80',
    },
    {
      name: 'Jackson',
      date: '1 hari yang lalu',
      comment: 'Menarik, penjelasannya bikin cepet paham',
      image:
        'https://images.unsplash.com/photo-1526667900883-4a817696e7e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      name: 'Eren',
      date: '1 hari yang lalu',
      comment: 'Mantap',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    },
  ]);

  const sendComment = () => {
    let array = [...comments];

    array.unshift({
      name: 'Sinta',
      date: 'Baru saja',
      comment: commentInput,
      image:
        'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg',
    });
    setComments(array);
  };

  useEffect(() => {
    setComments(comments);
  }, [comments]);
  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        subtitle="PART OF SPEECH - 1"
      />
      <YouTube
        apiKey="AIzaSyCubNo71MUH-swVi_MDxKKA4_TCcFEzB8E"
        videoId="SceDmiBEESI" // The YouTube video ID
        // play // control playback of video with true/false
        // fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        onReady={e => setIsReady(true)}
        onChangeState={e => setStatus(e.state)}
        onChangeQuality={e => setQuality(e.quality)}
        onError={e => setError(e.error)}
        style={{alignSelf: 'stretch', height: 300}}
      />
      <View style={{padding: 10, marginHorizontal: 20}}>
        <MontserratText>PART OF SPEECH - 1 by Randi</MontserratText>
      </View>
      <Divider />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginHorizontal: 20,
          justifyContent: 'space-around',
        }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setIsLike(!isLike);
              if (isLike) {
                setLikes(likes - 1);
                return;
              }
              setLikes(likes + 1);
            }}>
            <FontAwesomeIcon
              size={32}
              color={isLike ? color.heart : color.fonstSecondary}
              icon={faHeart}
            />
          </TouchableOpacity>
          <MontserratText style={{textAlign: 'center'}}>{likes}</MontserratText>
        </View>
        <View>
          <FontAwesomeIcon
            size={32}
            color={color.fonstSecondary}
            icon={faShare}
          />
        </View>
        <View>
          <MontserratText style={styles.laporkan}>Laporkan</MontserratText>
        </View>
      </View>
      <ScrollView>
        <Divider />
        <View style={styles.commentsContainer}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 15,
              alignItems: 'center',
            }}>
            <View style={{flexBasis: '10%'}}>
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg',
                }}
                style={{width: 40, height: 40, borderRadius: 20}}
              />
            </View>
            <View style={{marginHorizontal: 10, flexBasis: '70%'}}>
              <Input
                value={commentInput}
                onChangeText={value => setCommentInput(value)}
                placeholder="Beri Komentar"
              />
            </View>
            <View style={{flexBasis: '20%'}}>
              {commentInput.length > 0 && (
                <TouchableOpacity onPress={() => sendComment()}>
                  <MontserratText style={styles.sendButton}>
                    Kirim
                  </MontserratText>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <Divider />
          {comments.length > 0 &&
            comments.map((comment, i) => {
              return (
                <>
                  <View
                    key={i}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: 15,
                      alignItems: 'center',
                    }}>
                    <View>
                      <Image
                        source={{uri: comment.image}}
                        style={{width: 40, height: 40, borderRadius: 20}}
                      />
                    </View>
                    <View style={{width: '80%', marginHorizontal: 10}}>
                      <MontserratText
                        style={{
                          color: color.fonstSecondary,
                          fontSize: 10,
                          marginBottom: 5,
                        }}>
                        {comment.name} : {comment.date}
                      </MontserratText>
                      <MontserratText style={{color: color.fontPrimary}}>
                        {comment.comment}
                      </MontserratText>
                    </View>
                  </View>
                  <Divider />
                </>
              );
            })}
        </View>
      </ScrollView>
    </>
  );
};

export default ClassPaidCourse;

const styles = StyleSheet.create({
  laporkan: {
    backgroundColor: color.fonstSecondary,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 20,
    color: color.white,
  },
  commentsContainer: {},
  sendButton: {
    backgroundColor: color.primary,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 20,
    color: color.white,
    fontSize: 18,
  },
});
