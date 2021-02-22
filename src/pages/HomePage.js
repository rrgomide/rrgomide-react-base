import React from 'react';

import { MdTimer } from 'react-icons/md';

import CustomLink from '../components/shared/CustomLink';
import H2 from '../components/shared/H2';
import FeatureIcon from '../components/shared/FeatureIcon';

import { useTranslation } from 'react-i18next';

export default function HomePage({ routes }) {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container mx-auto">
      <H2>{t('home-page')}</H2>

      <div className="mx-4 flex flex-row flex-wrap items-center justify-center">
        {routes.map(({ id, description, path }) => {
          return (
            <div key={id} className="flex flex-row flex-wrap">
              <CustomLink to={path} style={{ textDecoration: 'none' }}>
                <FeatureIcon>
                  <MdTimer size="48" />
                  <span>{description}</span>
                </FeatureIcon>
              </CustomLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
