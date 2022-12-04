import 'bootstrap/dist/css/bootstrap.css';

import Link from 'next/link'

export default function Signin() {
  return (
    <div className="container mt-5 w-50">
   
      <p className="h1">Sign In</p>
    <form className="mt-5" action="/dashboard" method="post">
  
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="wEmail">Work Email</label>
    <input type="email" id="wEmail" className="form-control" required/>
  </div>

 
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="Pass">Password</label>
    <input type="password" id="Pass" className="form-control" required/>

  </div>
  
  <button type="submit" className="btn btn-primary w-100 mb-4">Sign in</button>
  
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      
    <div className="col">
    
    <Link href="/">Forgot password?</Link>
  </div>
    </div>

    <div className="col d-flex justify-content-end">
    
      <Link href="/">Create Account</Link>
    </div>
  </div>
</form>
</div>

  )
}