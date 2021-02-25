import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { IconFlagDE, IconFlagUK } from 'material-ui-flags';

const btnStyle = {
  // marginRight: '-30px'
};

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // localStorage.setItem('lang', lng);
  };

  return (
    <div className="LanguageSelector">
      <Button style={btnStyle} onClick={() => changeLanguage('en')}><IconFlagUK /></Button>
      <Button onClick={() => changeLanguage('de')}><IconFlagDE /></Button>
    </div>
  );
}
