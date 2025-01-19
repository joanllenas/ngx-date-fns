describe('strategy default spec', () => {
  beforeEach(() => {
    cy.visit('/strategy-default');
  });

  [
    //
    // fr
    //
    { dataId: 'mmddyyyy', given: 'dateOne', locale: '', render: '01/01/2016' },
    {
      dataId: 'dfns-min',
      given: '[dateOne, dateTwo]',
      locale: '',
      render: 'ven. janvier 1 2016'
    },
    {
      dataId: 'dfns-max',
      given: '[dateOne, dateTwo]',
      locale: '',
      render: 'dim. janvier 1 2017'
    },
    {
      dataId: 'format-es',
      given: 'dateThree',
      locale: '',
      render: 'hace 6 días'
    },
    {
      dataId: 'distance-now-0',
      given: 'dates[0]',
      locale: '',
      render: '1 jour'
    },
    {
      dataId: 'distance-now-1',
      given: 'dates[1]',
      locale: '',
      render: '6 jours'
    },
    {
      dataId: 'distance-now-2',
      given: 'dates[2]',
      locale: '',
      render: 'environ 1 mois'
    },
    {
      dataId: 'distance-now-3',
      given: 'dates[3]',
      locale: '',
      render: '5 mois'
    },
    {
      dataId: 'distance-now-4',
      given: 'dates[4]',
      locale: '',
      render: 'environ 2 ans'
    },
    {
      dataId: 'distance-now-5',
      given: 'dates[5]',
      locale: '',
      render: 'plus de 10 ans'
    },
    //
    // es
    //
    {
      dataId: 'mmddyyyy',
      given: 'dateOne',
      locale: 'es',
      render: '01/01/2016'
    },
    {
      dataId: 'dfns-min',
      given: '[dateOne, dateTwo]',
      locale: 'es',
      render: 'vie enero 1 2016'
    },
    {
      dataId: 'dfns-max',
      given: '[dateOne, dateTwo]',
      locale: 'es',
      render: 'dom enero 1 2017'
    },
    {
      dataId: 'format-es',
      given: 'dateThree',
      locale: 'es',
      render: 'hace 6 días'
    },
    {
      dataId: 'distance-now-0',
      given: 'dates[0]',
      locale: 'es',
      render: '1 día'
    },
    {
      dataId: 'distance-now-1',
      given: 'dates[1]',
      locale: 'es',
      render: '6 días'
    },
    {
      dataId: 'distance-now-2',
      given: 'dates[2]',
      locale: 'es',
      render: 'alrededor de 1 mes'
    },
    {
      dataId: 'distance-now-3',
      given: 'dates[3]',
      locale: 'es',
      render: '5 meses'
    },
    {
      dataId: 'distance-now-4',
      given: 'dates[4]',
      locale: 'es',
      render: 'alrededor de 2 años'
    },
    {
      dataId: 'distance-now-5',
      given: 'dates[5]',
      locale: 'es',
      render: 'más de 10 años'
    }
  ].forEach(({ dataId, given, locale, render }) => {
    const locale_label = locale === '' ? 'empty' : locale;
    it(`Give ${given} it should render ${render} when locale is ${locale_label}`, () => {
      if (locale !== '') {
        cy.get(`button[data-testid="${locale}"]`).click();
      }
      cy.get(`[data-testid="${dataId}"]`).should('include.text', render);
    });
  });
});
