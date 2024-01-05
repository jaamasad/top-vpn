import Card from '@/Component/Card'
import CardOld from '@/Component/Card/old';
import fs from 'fs';
import path from 'path';
export default function Home({vpnList}) {
  console.log(vpnList)
  return (
    <main>
        <div className='container'>
          <div className="row text-left">
            <div className="col-12 text-md-center">
              <h1 className="yellow text-responsive">Top VPN</h1>
              <p className="desc mb-0 mb-md-3 ">
                Lorem Ipsum is simply dummy text of the printing and typesettivpnDatang industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row">
          {/* <CardOld/> */}
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