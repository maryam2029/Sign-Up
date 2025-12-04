import  { useState } from 'react';
import Success from './Success';

 const lists=[
    {id:1,title:"Product Discovery and Building What matters",image:"/images/icon-list.svg"},
    {id:2,title:"Measuring to ensure updates are success",image:"/images/icon-list.svg"},
    {id:3,title:" Add much more",image:"/images/icon-list.svg"},
  ];

 export default  function SignUp( { email, setEmail }) {
    const [showSuccess,setShowSuccess]=useState(false)

    const [error, setError] = useState("");
    const emailPattern =/^(?!\.)(?!.*\.\.)([a-zA-Z0-9._%+-]{1,30})(?<!\.)@[a-zA-Z0-9-]{2,20}\.[a-zA-Z]{2,10}$/;
    const handleChange = (e) => {
    const value = e.target.value;
    const commonDomains = ["com", "net", "org", "edu", "gov"];
    const domain = value.split(".").pop();
    setEmail(value);
    if (!emailPattern.test(value) || !commonDomains.includes(domain )) {
      setError("valid email required");
    } else {
      setError(""); 
    }
  };

  const listItems=lists.map((lists)=>{
    return <li className='flex justify-items-center gap-x-3' key={lists.id} >
       <img src={lists.image} alt={lists.title} />
      <p>{lists.title}</p>
      </li>
  } );

  function handleFormSubmit(event){
    event.preventDefault();
    setShowSuccess(true);
  }
 
   if (showSuccess) {
    return <Success setShowSuccess={setShowSuccess} email={email} />;
  }
  return (
    <div  className='
bg-[#2C2F48]
min-h-screen
flex
items-center
justify-center
'>

    <form className='
    sm:p-0
    sm:border-0
    sm:rounded-none
    flex flex-col-reverse  
    md:flex-row
    gap-8 border-4 border-white 
    lg:p-4 
  bg-white lg:rounded-3xl
    w-full max-w-4xl' >
    <div  className="flex-1 mt-24">
      <h1 className="font-bold text-5xl mb-4 font-weight: 700 font-roboto text-[#1F1F1F]">Stay Updated</h1>
      <p className='text-gray-500 mb-4 text-1xl font-roboto'>Join 60,000+ Product managers receiving monthly <br />
       updates on:</p>
      <ul className='flex flex-col gap-2' >
        {listItems}
      </ul>
      <h6 className="mt-10 font-roboto font-bold " >Email address</h6>
     <div className='mt-4'> 
       {error && email.length > 0 && (<p className="text-red-500 text-sm ml-56"> {error}</p>)}
    <input 
    type="email"
    value={email}
    onChange={handleChange }
    placeholder="email@company.com " 
    className={` placeholder-[#A8A8A8] text-black border-2 border-[#DADADA] pl-8  rounded-lg w-96 h-13 
  ${error && email.length > 0 ? "bg-red-200  border-red-500" : ""} `}
    
    
    />
    </div>
     <br />
      <button className="bg-[#1E2337] text-white w-96 h-13 my-4 rounded-lg font-roboto cursor-pointer hover:bg-linear-to-r
       from-pink-500 to-orange-400 " disabled={error || email===""} onClick={handleFormSubmit}> Subscribe to monthly newslater</button>
    </div>

    <div className="w-full h-[340px] overflow-hidden md:h-auto md:w-auto md:shrink-0 ">
  <picture >
    <source
      media="(max-width: 767px)"
      className="w-full h-full object-cover object-bottom sm:object-contain rounded-b-lg p-0"
      srcSet="/images/illustration-sign-up-mobile.svg"
    />
    <img
      src="/images/illustration-sign-up-desktop.svg"
      alt="sign-up-desktop"
      className="w-full h-full object-cover object-bottom md:object-contain rounded-b-lg "
    />
  </picture>
</div>
    </form>
     </div> )}



