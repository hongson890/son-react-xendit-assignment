import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/* i18n.use(initReactI18next).init({
   lng: 'en',
   fallbackLng: 'en'
}); */
configure({ adapter: new Adapter() });
