import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

// Establecer el token de acceso de Mapbox
MapboxGL.setAccessToken('sk.eyJ1IjoiY2FuY2hlc2t5IiwiYSI6ImNsdXU1MHYwaDA2ZjAya3NmcGNleWF1ZHQifQ.el9nMyoe45uvzVUAzHn-6Q');

const ParkingMap = () => {
  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map} zoomLevel={15} centerCoordinate={[-122.4324, 37.78825]}>
        <MapboxGL.UserLocation />
        <MapboxGL.Marker coordinate={[-122.4324, 37.78825]} title="Parking Lot 1" />
        {/* Puedes agregar más marcadores para otros estacionamientos */}
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default ParkingMap;
