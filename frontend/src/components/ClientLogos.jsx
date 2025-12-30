import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: "Danone",
      logo: "https://customer-assets.emergentagent.com/job_eventelegance-3/artifacts/3avfkqjs_Screenshot%202025-12-30%20at%202.24.02%E2%80%AFPM.png#danone"
    },
    {
      name: "Novo Nordisk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Novo_Nordisk_Logo.svg/320px-Novo_Nordisk_Logo.svg.png"
    },
    {
      name: "Alkem",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Alkem_Laboratories_logo.svg/320px-Alkem_Laboratories_logo.svg.png"
    },
    {
      name: "Asian Paints",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Asian_Paints_Logo.svg/320px-Asian_Paints_Logo.svg.png"
    },
    {
      name: "Fintoo",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGxF8VWqxPY-A/company-logo_200_200/company-logo_200_200/0/1630481715504/fintoo_logo?e=2147483647&v=beta&t=vqYVJQhxQPVQqU0QxKQxG0qQxG0qQ"
    },
    {
      name: "Future Generali",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Future_Generali_India_Life_Insurance_Logo.svg/320px-Future_Generali_India_Life_Insurance_Logo.svg.png"
    },
    {
      name: "Lodha",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lodha_Group_logo.svg/320px-Lodha_Group_logo.svg.png"
    },
    {
      name: "Godrej Tyson",
      logo: "https://www.godrejtyson.com/images/logo.png"
    },
    {
      name: "Cipla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cipla_logo.svg/320px-Cipla_logo.svg.png"
    },
    {
      name: "Schbang",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHxQxG0qQxG0q/company-logo_200_200/0/1630481715504/schbang_logo"
    },
    {
      name: "SISL",
      logo: "https://www.sisl.in/images/logo.png"
    }
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900">
          Trusted by Leading Brands
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-scroll hover:pause-animation items-center">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
              style={{ minWidth: '220px', height: '100px' }}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="text-2xl md:text-3xl font-light text-gray-400 hover:text-gray-900 transition-colors duration-300">${client.name}</div>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
