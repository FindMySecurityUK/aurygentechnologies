const fs = require('fs');
const path = require('path');

// Read the services.json file
const servicesPath = path.join(__dirname, 'src', 'data', 'services.json');
const servicesData = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

// Define the new sections to add
const customSoftwareSolutions = {
  "title": "Custom Software Solutions for Every Scale",
  "solutions": [
    {
      "type": "Startups",
      "description": "We are a game-changer for startups, offering a cost-effective and agile solution. It allows startups to access top-tier talent on demand, without the financial burden of maintaining a full-time, in-house team."
    },
    {
      "type": "SMEs",
      "description": "For Small and Medium-sized Enterprises (SMEs), we serve as a strategic resource, providing a cost-efficient means to access specialized skills without the complexities of permanent hiring."
    },
    {
      "type": "Enterprises",
      "description": "For enterprises, we provide a strategic lever for efficiency and scalability. Leveraging external talent pools allows quick assembly of specialized teams, reducing time-to-market and enhancing flexibility."
    }
  ]
};

const keyBenefits = {
  "title": "Key Benefits",
  "benefits": [
    {
      "number": "01",
      "title": "Minimised Risks",
      "description": "Through our specialist talent pool, we help minimise risks and strengthen your business workforce."
    },
    {
      "number": "02",
      "title": "Faster Time to Market",
      "description": "Gain immediate access to an experienced team that helps speed up your time to market and avoids lengthy recruitment delays."
    },
    {
      "number": "03",
      "title": "Lower Operational Costs",
      "description": "Reduce long-term hiring expenses with our experts who provide support in areas such as training, recruitment, and employee benefits."
    },
    {
      "number": "04",
      "title": "Scalable Business Growth",
      "description": "Focus on expanding your core operations by outsourcing specialist tasks to trusted professionals, allowing for agile and scalable growth."
    },
    {
      "number": "05",
      "title": "Bespoke Software Solutions",
      "description": "Benefit from our tailored software development services, delivering personalised solutions that align with your strategic goals."
    },
    {
      "number": "06",
      "title": "Distinct Competitive Advantage",
      "description": "Stand out with software designed specifically to match your unique requirements and business strengths."
    }
  ]
};

// Update all subcategories
servicesData.services.forEach(service => {
  if (service.subcategories) {
    service.subcategories.forEach(subcategory => {
      // Only add if not already present
      if (!subcategory.customSoftwareSolutions) {
        subcategory.customSoftwareSolutions = customSoftwareSolutions;
      }
      if (!subcategory.keyBenefits) {
        subcategory.keyBenefits = keyBenefits;
      }
    });
  }
});

// Write the updated data back to the file
fs.writeFileSync(servicesPath, JSON.stringify(servicesData, null, 2));
console.log('Successfully updated all subcategories with new sections!');