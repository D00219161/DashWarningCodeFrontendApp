import { StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dash Warning</Text>
      <Text style={styles.title}>Roadside Assistance</Text>
      
        <li>
        <Text style={styles.title}>AA RoadWatch</Text>
      <p></p>
      <Text style={styles.title}>AA RoadWatch</Text>
      <p></p>
      <Text style={styles.title}>AA RoadWatch</Text>
      <p></p>
      <Text style={styles.title}>AA RoadWatch</Text>
      <p></p>
        </li>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
