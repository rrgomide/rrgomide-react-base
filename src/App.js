import React from 'react';
import { v4 as uuid } from 'uuid';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';
import NavBar from './components/shared/NavBar';
import { useTranslation } from 'react-i18next';

const ROUTES = [
  {
    id: uuid(),
    path: '/counter',
    description: 'useCounter',
    Page: CounterPage,
  },
];

const LANGUAGES = [
  {
    id: uuid(),
    description: 'Change language to English',
    emoji: '🇺🇸',
    language: 'en',
  },

  {
    id: uuid(),
    description: 'Mudar idioma para Português (Brasil)',
    emoji: '🇧🇷',
    language: 'ptBr',
  },
];

export default function App() {
  const { i18n, t } = useTranslation();

  React.useEffect(() => {
    /**
     * Changing app title (tab title)
     */
    document.title = t('app-title');

    /**
     * Changing "lang" attribute from
     * <html> tag, using only the first
     * two characters (en, pt, etc.)
     */
    document.documentElement.setAttribute(
      'lang',
      i18n.language.substring(0, 2)
    );
  }, [i18n.language, t]);

  function handleLanguageChange(newLanguage) {
    i18n.changeLanguage(newLanguage);
  }

  return (
    <Router>
      <div>
        <NavBar
          translations={LANGUAGES}
          onChangeLanguage={handleLanguageChange}
        />

        <Switch>
          {ROUTES.map(({ id, path, Page }) => {
            return (
              <Route key={id} path={path}>
                <Page />
              </Route>
            );
          })}

          <Route key="home" path="/">
            <HomePage routes={ROUTES} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
