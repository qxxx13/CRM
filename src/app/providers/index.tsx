import { compose } from 'redux';

import { withRouter } from './withRouter';

export const withProviders = compose(withRouter);
