import React from 'react';
import { useRouter } from 'next/router';
import VpnDetail from '../../Component/VpnDetail';
import path from 'path';
import fs from 'fs';

const VpnDetailPage = ({ vpn }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <VpnDetail vpnData={vpn[0]} />;
};

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'public/data/vpn.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const vpnList = JSON.parse(fileContents);

  const paths = vpnList.map((vpn) => ({
    params: { id: vpn.name.toLowerCase().replace(/\s/g, '-') },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const vpnName = params.id
  console.log('hello',params.id)
  const vpnFilePath = path.join(process.cwd(), `public/data/${vpnName.toLowerCase()}.json`);

  try {
    const vpnFileContents = fs.readFileSync(vpnFilePath, 'utf8');
    const vpn = JSON.parse(vpnFileContents);
console.log(vpn)
    return { props: { vpn }, revalidate: 1 };
  } catch (error) {
    console.error(`Error reading or parsing ${vpnName}.json:`, error);
    return { notFound: true };
  }
}

export default VpnDetailPage;
