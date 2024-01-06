import Card from '@/Component/Card'
import fs from 'fs';
import path from 'path';
export default function Home({ vpnList }) {
  console.log(vpnList)
  return (
    <main>
      <div className="text-center text-white hero-section">
        <h1 className="text-6xl font-semibold display-1 mb-4">Top VPN</h1>
        <p className="text-gray-600"> Lorem Ipsum is simply dummy text of the printing and typesettivpnDatang industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="container">
        <div className="row">
          {vpnList.map((vpn, index) => (
            <Card key={index} vpn_index={index} vpn={vpn} />
          ))}
        </div>
      </div>
    </main>
  )
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public/data/vpn.json');

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const vpnList = JSON.parse(fileContents);

    return {
      props: {
        vpnList,
      },
    };
  } catch (error) {
    console.error('Error reading or parsing vpn.json:', error);
    return {
      props: {
        vpnList: [],
      },
    };
  }
}