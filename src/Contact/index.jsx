import { Link } from 'react-router-dom'

function Contact() {

  return (
    <>
      <div className='d-flex mt-5 justify-content-center'>
        <h5>The page was created by Aslan Alaev, a student of Gamma Intelligence educational courses</h5>
      </div>
      <div className='mt-3 gap-2 justify-content-center d-flex '>
        <Link className="text-dark" to='http://github.com/0xCIA' target='blank'>Github</Link><br />
        <Link className="text-dark" to='http://twitter.com/0xblya' target='blank'>Twitter</Link><br />
        <Link className="text-dark" to='https://medium.com/@Jeune_Renoi' target='blank'>Medium</Link>
      </div>
    </>
  )
}

export default Contact