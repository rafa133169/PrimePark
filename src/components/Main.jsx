import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const ParkingLotCard = ({ name, address, price }) => (
  <View style={{ borderRadius: 8, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', padding: 12, marginBottom: 16 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 14, color: '#888' }}>{address}</Text>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>${price}</Text>
      <TouchableOpacity style={{ backgroundColor: '#007bff', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 6 }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Book</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Main = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f3f4f6' }}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 12, alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Parking Lot</Text>
        <TouchableOpacity style={{ padding: 8 }}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, marginTop: 12 }}>
        <TextInput
          style={{ flex: 1, height: 40, borderBottomWidth: 1, borderBottomColor: '#ccc', fontSize: 16 }}
          placeholder="Enter your location"
        />
        <TouchableOpacity style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 6, marginLeft: 8 }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1, padding: 12 }}>
        <ParkingLotCard name="Parking Lot 1" address="1234 Elm Street" price={10} />
        <ParkingLotCard name="Parking Lot 2" address="5678 Oak Street" price={15} />
        <ParkingLotCard name="Parking Lot 3" address="91011 Pine Street" price={20} />
      </ScrollView>
    </View>
  );
};

export default Main;
