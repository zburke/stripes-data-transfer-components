import { render } from '@testing-library/react';
import { noop } from 'lodash';
import {
  QueryClient, QueryClientProvider,
} from 'react-query';
import createReactQueryClient from '@folio/stripes-core/src/createReactQueryClient';
import React from 'react';
import { StripesContext } from '@folio/stripes-core/src/StripesContext';

const stripesDefaultProps = {
  okapi: { url: '' },
  logger: { log: noop },
  connect: Component => props => (
    <Component
      {... props}
      mutator={{}}
      resources={{}}
    />
  ),
};

const reactQueryClient = new QueryClient(createReactQueryClient());

const stripes = Object.assign({}, stripesDefaultProps);

export const renderWithContext = children => {
  return render(
    <StripesContext.Provider value={stripes}>
      <QueryClientProvider client={reactQueryClient}>
        {children}
      </QueryClientProvider>
    </StripesContext.Provider>
  );
};
