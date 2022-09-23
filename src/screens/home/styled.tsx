import {TextInputProps} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.fontSize.title}px;
  color: ${({theme}) => theme.colors.primary};
  margin: ${({theme}) => theme.space.sm}px 0;
  font-family: ${({theme}) => theme.fonts.poppins.bold};
  align-self: center;
`;

export const Inline = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const TextField = styled.View`
  position: relative;
  width: 85%;
`;

export const Input = styled.TextInput.attrs<TextInputProps>({
  placeholderTextColor: '#fffefebd',
  selectionColor: '#222222c0',
})`
  width: 98%;
  height: ${({theme}) => theme.screenDimensions.height * 0.07}px;
  border-radius: ${({theme}) => theme.space.sm}px;
  background-color: ${({theme}) => theme.colors.secundary};
  padding: ${({theme}) => theme.space.sm}px;
  padding-right: ${({theme}) => theme.space.sm * 4 + theme.fontSize.icons}px;
  left: 2%;
  font-family: ${({theme}) => theme.fonts.inter.medium};
  font-size: ${({theme}) => theme.fontSize.text}px;
  color: #fff;
  elevation: 1;
`;

export const SearchButton = styled.TouchableOpacity`
  position: absolute;
  top: ${({theme}) => theme.space.sm};
  right: ${({theme}) => theme.space.sm};
  border-radius: ${({theme}) => theme.space.sm}px;
  padding: ${({theme}) => theme.space.sm}px;
  background-color: ${({theme}) => theme.colors.primary};
  elevation: 2;
`;
export const SearchIcon = styled(Entypo)`
  font-size: ${({theme}) => theme.fontSize.icons}px;
  color: #fff;
`;

export const ShoppingCartButton = styled.TouchableOpacity`
  border-radius: ${({theme}) => theme.space.sm}px;
  padding: ${({theme}) => theme.space.sm}px;
  background-color: ${({theme}) => theme.colors.primary};
  width: 12%;
  margin-left: 1.5%;
  align-items: center;
  justify-content: center;
  elevation: 1;
`;

export const ShoppingCartIcon = styled(AntDesign)`
  font-size: ${({theme}) => theme.fontSize.icons}px;
  color: #fff;
`;

/* Section */

export const Section = styled.View`
  margin: ${({theme}) => theme.space.sm}px;
  margin-top: ${({theme}) => theme.space.lg}px;
  position: relative;
`;

export const SectionTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.inter.bold};
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fontSize.sectionTitle};
  margin-left: ${({theme}) => theme.space.sm}px;
  margin-top: ${({theme}) => theme.space.sm}px;
`;

export const DetachCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: ${({theme}) => theme.screenDimensions.width * 0.9}px;
  height: ${({theme}) => theme.screenDimensions.height * 0.2}px;
  border-radius: ${({theme}) => theme.space.sm}px;
  background-color: #22222290;
  margin-right: 10px;
  justify-content: flex-end;
  position: relative;
`;
export const DetachProductBackground = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: ${({theme}) => theme.space.sm}px;
  z-index: 1;
`;

export const DetachCardContent = styled.View`
  z-index: 2;
  padding: 0 ${({theme}) => theme.space.sm}px;
`;

export const DetachCardModel = styled.Text`
  color: ${({theme}) => theme.colors.textLight};
  font-size: ${({theme}) => theme.fontSize.cardTitle};
  font-family: ${({theme}) => theme.fonts.poppins.bold};
  margin-bottom: ${({theme}) => theme.space.sm}px;
  border-radius: ${({theme}) => theme.space.sm}px;
`;
