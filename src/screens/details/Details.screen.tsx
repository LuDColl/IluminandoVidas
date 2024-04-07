import { Button, Image, ImageSourcePropType, Text, View } from 'react-native';
import {
  startTextStyle,
  faceStyle,
  halfHrStyle,
  hrStyle,
  identificationDataStyle,
  identificationStyle,
  imgageStyle,
  nextTextStyle,
  screenStyle,
  textStyle,
} from './Details.styles';

export default function DetailsScreen() {
  const logoUri =
    'https://instagram.frao3-1.fna.fbcdn.net/v/t51.2885-19/238888968_1009700642931837_2238685757543417422_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.frao3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=YiY8tFPsN24AX--Yvef&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBSC1r9FiVRLRDz2zyYnPwqaLJoTxoQ_8Kr-txpkeFjyw&oe=66110088&_nc_sid=8b3546';
  const logoSource: ImageSourcePropType = { uri: logoUri };

  const faceUri =
    'https://instagram.frao3-1.fna.fbcdn.net/v/t51.2885-19/317860414_535929078390924_3986954535064608086_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.frao3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=KO0ZgVQMTAoAX9-CI2O&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCPJDSACA5gztyYz1k4_3ZSUJBr-QxrdjBPPamNmV1QEw&oe=6611043B&_nc_sid=8b3546';
  const faceSource: ImageSourcePropType = { uri: faceUri };

  return (
    <View style={screenStyle}>
      <Image source={logoSource} style={imgageStyle} />
      <View style={identificationStyle}>
        <Image source={faceSource} style={faceStyle} />
        <View style={identificationDataStyle}>
          <Text style={textStyle}>202003599964 - 01/04/2024</Text>
          <Text style={nextTextStyle}>Lucas Guimarães de Oliveira</Text>
          <Text style={nextTextStyle}>07/06/2024 - Brasileiro</Text>
          <Text style={nextTextStyle}>21 anos - Masculino</Text>
        </View>
      </View>
      <View style={hrStyle} />
      <Text style={startTextStyle}>
        Rua Cristiano Armbrust, 280 - Jardim Aquárius - Ribeirão Preto
      </Text>
      <View style={hrStyle} />
      <Text style={startTextStyle}>E.E. Major de Souza - 5º Série - Noite</Text>
      <View style={hrStyle} />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={textStyle}>Mãe</Text>
          <View style={halfHrStyle} />
          <Text style={textStyle}>Marta Maria Guimarães de Oliveira</Text>
          <Text style={nextTextStyle}>Rua Cristiano Armbrust, 280</Text>
          <Text style={nextTextStyle}>Jardim Aquárius - Ribeirão Preto</Text>
          <Text style={nextTextStyle}>(16) 99401-0193</Text>
        </View>
        <View style={{ width: 16 }}></View>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={textStyle}>Pai</Text>
          <View style={halfHrStyle} />
          <Text style={textStyle}>Marcos Antônio de Oliveira</Text>
          <Text style={nextTextStyle}>Rua Cristiano Armbrust, 280</Text>
          <Text style={nextTextStyle}>Jardim Aquárius - Ribeirão Preto</Text>
          <Text style={nextTextStyle}>(16) 99401-0193</Text>
        </View>
      </View>
    </View>
  );
}
