import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Worker de MSW con los handlers REST y GraphQL
export const worker = setupWorker(...handlers);
