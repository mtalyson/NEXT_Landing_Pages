import config from '../config';
import { mapData } from './map-data';

export const loadPages = async () => {
  const cleanSlug = `${config.defaultSlug.replace(/[^a-z0-9-_]/gi, '')}`;
  const url = `${config.url}${cleanSlug}` + '&populate=deep';

  const response = await fetch(url);
  const responseData = await response.json();

  const pageAttributes = responseData.data[0].attributes;
  const pageData = mapData([pageAttributes]);

  return pageData;
};
