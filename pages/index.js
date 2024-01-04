import Card from '@/Component/Card'

export default function Home() {
  return (
    <main>
        <div className='container'>
          <div className="row text-left">
            <div className="col-12 text-md-center">
              <h1 className="yellow text-responsive">Top VPN</h1>
              <p className="desc mb-0 mb-md-3 text-white ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <Card />
    </main>
  )
}
