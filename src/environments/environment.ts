import { EnvironmentInterface } from './environment.interface';

const BASE_URL: string = 'BASE_URL_STRING';
export const environment: EnvironmentInterface = {
  API_BASE_URL: BASE_URL + '/api',
  MEDIA_URL: BASE_URL + '/media',
};
