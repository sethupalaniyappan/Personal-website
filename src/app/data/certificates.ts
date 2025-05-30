export type Certificate = {
  title: string;
  issuer: string;
  issueDate: Date;
  credentialUrl?: string;  // Optional link to certificate or course
  linkDisplayText?: String | "View Certificate";
};

export const certificates: Certificate[] = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issueDate: new Date(2023, 5, 15), // June 15, 2023
    credentialUrl: "https://www.yourcertificateurl.com/aws",
    linkDisplayText: "amazon.com",
  },
  {
    title: "Full Stack Web Development with React",
    issuer: "Coursera",
    issueDate: new Date(2022, 10, 10), // November 10, 2022
    credentialUrl: "https://www.coursera.org/account/accomplishments/yourid",
  },
  {
    title: "Microservices with Spring Boot",
    issuer: "Udemy",
    issueDate: new Date(2021, 7, 20), // August 20, 2021
  },
  // Add more certificates or courses here
];
