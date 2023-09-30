/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import SlotMachine from 'react-native-slot-machine';
import WinningModal from './components/WinningModal';

export default function App() {
  const [selectRandomSlot, setSelectRandomSlot] = useState('2351');
  const [slotSettings, setSlotSettings] = useState({
    duration: 0,
    slot: selectRandomSlot,
  });
  const [showWinningModal, setShowWinningModal] = useState(false);

  const slotOptions = [
    // '0123',
    // '1234',
    // '2345',
    // '3450',
    // '4501',
    // '5012',
    // '0012',
    // '1123',
    // '2233',
    // '5555',
    '1111',
    '2222',
    '3333',
    '4444',
    '5555',
  ];
  const spinClick = () => {
    const randomIndex = Math.floor(Math.random() * slotOptions.length);
    const randomSlots = slotOptions[randomIndex];
    setSelectRandomSlot(randomSlots);
    console.log(randomSlots);
    setSlotSettings({
      duration: 1000,
      slot: randomSlots,
    });

    if (
      randomSlots == 1111 ||
      randomSlots == 2222 ||
      randomSlots == 3333 ||
      randomSlots == 4444 ||
      randomSlots == 5555
    ) {
      setTimeout(() => {
        setShowWinningModal(true);
      }, 1000);
      setTimeout(() => {
        setShowWinningModal(false);
      }, 3000);
    }
  };

  const symbols = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌']; // can't use emojies in SlotMachine because some of them are comprised of 2 chars
  return (
    <>
      <WinningModal showWinningModal={showWinningModal} />
      <View style={styles.container}>
        <View style={styles.slotWrapper}>
          <View style={styles.slotCont}>
            <SlotMachine
              text={slotSettings.slot}
              range="012345"
              renderContent={c => (
                <Text style={{fontSize: 40}}>{symbols[c]}</Text>
              )}
              duration={slotSettings.duration}
              width={60}
              height={100}
            />
          </View>
        </View>

        <View style={{width: 150, height: 150}}>
          {/* <Image
          source={require('./images/sss.png')}
          style={{width: 100, height: 100}}
        /> */}
        </View>
        <View style={styles.btnCont}>
          <TouchableOpacity style={styles.spinBtn} onPress={spinClick}>
            <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
              SPIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  slotWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  slotCont: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'orange',
    marginBottom: 20,
    marginRight: 10,
    paddingLeft: 5,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderWidth: 6,
    borderColor: 'red',
    borderRadius: 15,
  },
  btnCont: {
    flex: 0.2,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  spinBtn: {
    backgroundColor: '#f0483c',
    opacity: 0.9,
    width: '40%',
    height: 55,
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
