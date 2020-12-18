import React from 'react';
import { Text, View } from 'react-native';

const FlexDimensionsBasics = () => {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 0.5, backgroundColor: 'white'}}>
          <Text style={{fontSize: 18, marginLeft:20, textAlign:"center",marginRight:20, marginBottom:2, fontWeight: "bold"}}>
          5 книжных новинок октября
          </Text>
        </View>
        <View style={{flex: 2, backgroundColor: '#D3D3D3'}}>
        <Text style={{textAlign:"center",fontSize: 18, marginTop: 30, marginLeft:20,marginRight:20}}>
          «Кадиш.com» Натан Ингландер. Издательство «Книжники»
          </Text>
        </View>
        <View style={{flex: 10, backgroundColor: '#A9A9A9'}}>
        <Text style={{textAlign:"center",fontSize: 18, marginTop: 30, marginLeft:20,marginRight:20}}>
          Новый роман известного американского прозаика Натана Ингландера — острая и ироничная история о метаниях между современной реальностью и заветами предков. После смерти отца герой принимает прагматичное решение — воспользоваться услугами специального сервиса: чтение заупокойной молитвы по усопшему. Однако переложив на других эту обременительную обязанность, он оказывается в положении библейского Исава, что продал первородство за чечевичную похлебку. И теперь ни любовь к семье, ни здравый смысл, ни нужда — ничто не остановит его в попытке обрести утраченное, а заодно и перевернуть вверх дном жизнь прочих персонажей.
          </Text>
        </View>
      </View>
    );
};

export default FlexDimensionsBasics;