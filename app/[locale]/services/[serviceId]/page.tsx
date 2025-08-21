import { getServiceById } from '@/modules/services/actions';
import ServicePage from '@/modules/services/views/ServicePage';
import { Metadata } from 'next/types';

export default async function servicePage({
  params,
}: {
  params: { serviceId: string };
}) {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);

  return <ServicePage service={service} />;
}
