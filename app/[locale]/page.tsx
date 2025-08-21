import { getServices } from '@/actions';
import HomePage from '@/modules/home/views/HomePage';

export const metadata = {
  title: 'Home | Bin Hindi Law',
  description: 'Welcome to Bin Hindi Law - Legal services and consultations',
  openGraph: {
    title: 'Bin Hindi Law',
    description: 'Legal services and consultations',
    type: 'website',
    url: 'https://binhindilaw.com',
  },
};

export default function homePage() {
  return <HomePage />;
}
