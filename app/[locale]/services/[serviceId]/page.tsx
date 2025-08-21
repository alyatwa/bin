import { getServiceById } from '@/modules/services/actions';
import ServicePage from '@/modules/services/views/ServicePage';
import { Metadata } from 'next/types';

export async function generateMetadata({
  params,
}: {
  params: { serviceId: string };
}): Promise<Metadata> {
  return {
    title: 'Service Details',
    description: 'Detailed information about the service.',
  };
}

export default async function servicePage({
  params,
}: {
  params: { serviceId: string };
}) {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);

  return <ServicePage service={service} />;
}
