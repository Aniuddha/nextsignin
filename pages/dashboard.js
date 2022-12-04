import 'bootstrap/dist/css/bootstrap.css';

import Link from 'next/link'



export default function Dashboard() {
  return (
    <div className="d-flex flex-column vh-100">
    
    <div className="container flex-fill">
    <form className="mt-5">
    <button className=" rounded-pill border-0 mb-1" style={{color:'#4000FF', background:'#E0E0F8' }} disabled>test campaign</button>

    <p className="h1">Info</p>

    <p className="text-secondary mb-5">Some details about your campaign</p>

    <div className="form-outline mb-4 w-50">
      <label className="form-label">Name of your campaign</label>
      <input type="text" className="form-control" required/>
    </div>
   
    <div className="form-check mb-3">
      <input className="form-check-input" type="checkbox" value="" id="check" defaultChecked />
      <label className="form-check-label" htmlFor="check">I'll use Viral Loops Pages</label>
    </div>
   
    
    <div style={{ fontSize: '80%' }}>
    <p className="text-muted m-0 " id="ligttext" >We'll help you create a landing page for your capmpaign on the next step.</p>
    <p className="text-muted m-0" id="ligttext">Referrals will direct people to this landing page.</p>
    </div>
    </form>
    </div>
    
    <footer className='d-flex align-items-end justify-content-between shadow-lg'>
    <Link href="/"><button className='btn p-3' style={{borderRadius: '0' }}><b>Back</b></button></Link>
      <div className="text-center p-2">
       <p><b>Info</b>{'>'} Rewarding{'>'} Widgets{'>'} Notifications{'>'} Intregartion{'>'}Installation</p>
      </div>
      <button className='btn bg-dark p-3 text-white' style={{borderRadius: '0' }}><b>Next</b></button>
    </footer>
</div>
  )
}