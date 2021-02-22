import React from 'react';
import { useTranslation } from 'react-i18next';

import AutomaticCounter from '../components/counters/AutomaticCounter';
import CustomCounter from '../components/counters/CustomCounter';
import SimpleCounter from '../components/counters/SimpleCounter';
import H2 from '../components/shared/H2';

export default function Counter() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto no-select">
      <H2>{t('counter-title')}</H2>

      <div className="flex flex-col space-y-1">
        <SimpleCounter title={t('counter-simple')} />
        <CustomCounter title={t('counter-custom')} />
        <AutomaticCounter title={t('counter-auto')} />
      </div>
    </div>
  );
}
