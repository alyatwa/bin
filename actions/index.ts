import { client } from '@/lib/api';
import { API } from '@strapi/client';

export const getServices = async (): Promise<
  API.DocumentResponseCollection<API.Document>
> => {
  try {
    const articles = client.collection('articles');
    const response = await articles.find({
      populate: '*',
    });
    return response;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [] as unknown as API.DocumentResponseCollection<API.Document>;
  }
};
