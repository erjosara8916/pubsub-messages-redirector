import { Router } from 'express';

import * as controllers from './controllers';
import * as validations from './validations';

const router: Router = Router();

router.get('/ping', controllers.ping);
router.use(
  '/clients/messages',
  validations.clientMessageValidations,
  controllers.sendClientMessage,
);

export { router };
