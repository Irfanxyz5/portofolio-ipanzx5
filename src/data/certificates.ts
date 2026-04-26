// src/data/certificates.ts
import { Certificate } from '@/types';

export const certificatesData: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Certified Blockchain Developer',
    issuer: 'Blockchain Council',
    date: '2023',
    image: '/images/certificates/blockchain-developer.jpg',
    credentialUrl: 'https://certificates.example.com/blockchain-dev-123',
  },
  {
    id: 'cert-2',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: '/images/certificates/aws-architect.jpg',
    credentialUrl: 'https://aws.amazon.com/verification/cert-456',
  },
  {
    id: 'cert-3',
    title: 'React Advanced Patterns',
    issuer: 'Frontend Masters',
    date: '2022',
    image: '/images/certificates/react-advanced.jpg',
    credentialUrl: 'https://frontendmasters.com/certificate/789',
  },
  {
    id: 'cert-4',
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: '2021',
    image: '/images/certificates/fullstack-dev.jpg',
    credentialUrl: 'https://udemy.com/certificate/UC-abc123',
  },
  {
    id: 'cert-5',
    title: 'TypeScript Professional',
    issuer: 'Microsoft',
    date: '2022',
    image: '/images/certificates/typescript-pro.jpg',
    credentialUrl: 'https://microsoft.com/credentials/xyz789',
  },
  {
    id: 'cert-6',
    title: 'Solidity Smart Contract Development',
    issuer: 'Ethereum Foundation',
    date: '2021',
    image: '/images/certificates/solidity-dev.jpg',
    credentialUrl: 'https://ethereum.org/credentials/sol-456',
  },
];
