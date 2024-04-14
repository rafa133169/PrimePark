import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MapScreen = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotPress = (slotId) => {
    setSelectedSlot(slotId);
    // Aquí puedes agregar la lógica para reservar el slot
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/parking-map.png')}
        style={styles.mapImage}
      />
      <View style={styles.slotsContainer}>
        <TouchableOpacity
          style={[styles.slot, selectedSlot === 'vip' && styles.selectedSlot]}
          onPress={() => handleSlotPress('vip')}
        />
        <TouchableOpacity
          style={[styles.slot, selectedSlot === 'premium' && styles.selectedSlot]}
          onPress={() => handleSlotPress('premium')}
        />
        <TouchableOpacity
          style={[styles.slot, selectedSlot === 'normal' && styles.selectedSlot]}
          onPress={() => handleSlotPress('normal')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  slotsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  slot: {
    width: 30,
    height: 30,
    margin: 5,
    backgroundColor: 'gray',
  },
  selectedSlot: {
    backgroundColor: 'green',
  },
});

export default MapScreen;
