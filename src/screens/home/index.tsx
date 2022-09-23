import React from 'react';
import {FlatList, Keyboard, SectionList} from 'react-native';
import {sections} from './sections';
import {
  Container,
  DetachCard,
  DetachCardContent,
  DetachCardModel,
  DetachProductBackground,
  Inline,
  Input,
  SearchButton,
  SearchIcon,
  Section,
  SectionTitle,
  ShoppingCartButton,
  ShoppingCartIcon,
  TextField,
  Title,
} from './styled';

export const HomeScreen: React.FC = () => {
  const handleSearch = () => {
    Keyboard.dismiss();
  };

  return (
    <Container>
      <Title>OpenShoes</Title>
      <Inline>
        <TextField>
          <Input placeholder={'Busque já ...'} cursorColor={'#fff'} />
          <SearchButton onPress={handleSearch}>
            <SearchIcon name="magnifying-glass" />
          </SearchButton>
        </TextField>
        <ShoppingCartButton>
          <ShoppingCartIcon name="shoppingcart" />
        </ShoppingCartButton>
      </Inline>
      <SectionList
        sections={sections}
        style={{marginTop: 24}}
        renderItem={({item, index}) => (
          <Section>
            <FlatList
              data={item}
              renderItem={({item: card, index}) => (
                <DetachCard>
                  <DetachProductBackground source={{uri: card.image}} />
                  <DetachCardContent>
                    <DetachCardModel>{card.model}</DetachCardModel>
                  </DetachCardContent>
                </DetachCard>
              )}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={({key}) => key}
            />
          </Section>
        )}
        renderSectionHeader={({section: {title}}) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
    </Container>
  );
};
