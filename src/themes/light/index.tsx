import {RFPercentage as Percet} from 'react-native-responsive-fontsize';
import {StatusBar, Dimensions} from 'react-native';

const statusbarHeight = StatusBar.currentHeight;
const {height, width} = Dimensions.get('window');

export const light = {
  colors: {
    primary: '#1d3557',
    primaryLight: '#a8dadc',
    secundary: '#457b9d',
    emphasys: '#e63946',
    text: '#222',
    background: '#fafafa',
    textLight: '#fff',
  },
  fontSize: {
    title: Percet(4.5),
    sectionTitle: Percet(3.4),
    cardTitle: Percet(3),
    text: Percet(2.3),
    icons: Percet(3.5),
  },
  space: {
    sm: Percet(1),
    md: Percet(2),
    lg: Percet(2.5),
  },
  screenDimensions: {
    width,
    height,
    statusbarHeight,
  },
  fonts: {
    inter: {
      medium: 'Inter-Medium',
      bold: 'Inter-Bold',
      regular: 'Inter-Regular',
      semi: 'Inter-SemiBold',
    },
    poppins: {
      medium: 'Poppins-Medium',
      bold: 'Poppins-Bold',
      regular: 'Poppins-Regular',
      semi: 'Poppins-SemiBold',
    },
  },
};
