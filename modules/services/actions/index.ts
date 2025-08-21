import { client } from '@/lib/api';
import { API } from '@strapi/client';

export const getServiceById = async (
  serviceId: string,
): Promise<API.DocumentResponse> => {
  const articles = client.collection('articles');
  return await articles.findOne(serviceId, {
    populate: '*',
  });
};
