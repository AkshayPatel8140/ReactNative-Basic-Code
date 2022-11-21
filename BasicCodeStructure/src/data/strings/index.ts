import LocalizedStrings from 'react-native-localization';
import STRINGS_ENGLISH from './stringsEnglish';
import STRINGS_HINDI from './stringsHindi';

let STRINGS = new LocalizedStrings({
  en: STRINGS_ENGLISH,
  hi: STRINGS_HINDI,
});

export default STRINGS;
