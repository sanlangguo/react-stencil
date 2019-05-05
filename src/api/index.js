import intercept from './intercept';

export function getResourcesToken() {
  const url = '/courses/classify';
  return intercept({
    method: 'get',
    url
  });
}