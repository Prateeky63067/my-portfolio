// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='contactSection'>
//            <div className='mainhead '>
//      <h1 className='whitehed'>Contact</h1>
//     </div>
//     </div>
//   )
// }

// export default Contact


import React from 'react'
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   setFormStatus('Submitting...')
  //   const { name, email, message } = e.target.elements
  //   let conFom = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   }
  //   console.log(conFom)
  // }
  return (
    <div className='contactSection'>
       <div className='mainhead contactmainhead '>
           <h1 className='whitehed'>Contact</h1>
       </div>
    <div className="container mt-5">
      <h2 className="mb-3">React Contact Form Component Example</h2>
      <form  action="https://formspree.io/f/xknanwzn"
  method="POST">
        <div className="mb-3">
          {/* <label className="form-label" htmlFor="name">
            Name
          </label> */}
          <input className="form-control" type="text" id="name" placeholder="Name"  name="name" required />
        </div>
        <div className="mb-3">
          {/* <label className="form-label" htmlFor="email">
            
          </label> */}
         
          <input className="form-control" type="email" id="email" placeholder='Email' name="email" required />
          
        </div>
        <div className="mb-3">
          {/* <label className="form-label" htmlFor="message">
            Message
          </label> */}
          <textarea className="form-control" id="message" placeholder='Message' name="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </div>
  )
}
export default Contact