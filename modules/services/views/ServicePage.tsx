'use client';
import { API } from '@strapi/client';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import Markdown from 'markdown-to-jsx';

interface ServiceDataProps {
  service: Promise<API.DocumentResponse>;
}

const ServicePage: React.FC<ServiceDataProps> = ({ service }) => {
  const servicePromise = use(service);
  const serviceData = servicePromise.data;

  return (
    <div className={`min-h-screen bg-gray-50 `}>
      {/* Hero Background Section */}
      <div className="relative bg-cover bg-center bg-no-repeat h-64 md:h-80">
        {/* Brown overlay */}
        <Image
          src={serviceData.cover.url || '/default-hero.jpg'}
          alt={serviceData.title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(75, 38, 21, 0.7)',
          }}
        ></div>
      </div>

      {/* Back Button - positioned below hero background */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href={`/en`}
            className={`inline-flex items-center text-brown-900 hover:text-brown-700 transition-colors duration-200 
              `}
          >
            <svg className={`w-5 h-5 `} fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg font-medium">{'Back'}</span>
          </Link>
        </div>
      </div>

      {/* Service Title and Description Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-8  `}>
            <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">
              {serviceData.title}
            </h1>
            <div className="max-w-4xl">
              <p className="text-xl leading-relaxed text-gray-700">
                {serviceData.description}
              </p>
            </div>
            {/* Render blocks from Strapi */}
            {Array.isArray(serviceData.blocks) &&
              serviceData.blocks.length > 0 && (
                <div className="mt-8 space-y-8">
                  {serviceData.blocks.map((block) => {
                    switch (block.__component) {
                      case 'shared.rich-text':
                        return (
                          <div key={block.id} className="prose">
                            <Markdown>{block.body}</Markdown>
                          </div>
                        );
                      case 'shared.quote':
                        return (
                          <blockquote
                            key={block.id}
                            className="border-l-4 pl-4 italic text-gray-800"
                          >
                            <p>{block.body}</p>
                            {block.title && (
                              <footer className="mt-2 text-sm text-gray-500">
                                — {block.title}
                              </footer>
                            )}
                          </blockquote>
                        );
                      case 'shared.media':
                        return (
                          <div key={block.id} className="my-4">
                            {/* Render media block (add image/video logic as needed) */}
                            <span className="text-gray-500">[Media block]</span>
                          </div>
                        );
                      case 'shared.slider':
                        return (
                          <div key={block.id} className="my-4">
                            {/* Render slider block (add slider logic as needed) */}
                            <span className="text-gray-500">
                              [Slider block]
                            </span>
                          </div>
                        );
                      default:
                        return (
                          <div key={block.id} className="my-4">
                            <span className="text-gray-500">
                              [Unknown block type]
                            </span>
                          </div>
                        );
                    }
                  })}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
