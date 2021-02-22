import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import H1 from './H1';

export default function NavBar({ translations = [], onChangeLanguage = null }) {
  const { t } = useTranslation();

  return (
    <nav className="w-full p-2 bg-blue-900 text-white flex flex-row items-center justify-between no-select">
      <Link to="/" exact="true">
        <H1>{t('navbar-title')}</H1>
      </Link>

      <div className="flex flex-row items-center justify-start">
        {translations.map(({ id, description, emoji, language }) => {
          return (
            <span
              className="cursor-pointer text-2xl"
              onClick={() => onChangeLanguage(language)}
              role="img"
              aria-label={description}
              title={description}
              alt={description}
              key={id}
            >
              {emoji}&nbsp;
            </span>
          );
        })}
      </div>
    </nav>
  );
}
