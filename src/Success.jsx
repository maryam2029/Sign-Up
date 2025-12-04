
function Success({setShowSuccess,email }) 
{
  return (
    <div
    className='bg-[#2C2F48] min-h-screen flex  flex-col items-center justify-center' >
      <div className=' pt-20 h-lvh  w-lvw border-4 border-white md:border-0  md:h-fit  lg:p-12 
       lg:rounded-3xl lg:w-fit bg-white 
       flex flex-col ' >
        <img src="/images/icon-list.svg" alt="Icon" className=' w-20 h-13' />
        <div className="pl-4 flex flex-col h-lvh lg:h-fit">
        <h1 className=" mt-15 font-bold text-5xl mb-4 font-weight: 700 font-roboto text-[#1F1F1F]">Thanks for <br /> Subcribing</h1>
        <p>
             Aconfirmation email has been sent to <br />
             <strong className="font-bold  font-weight: 700 font-roboto text-[#1F1F1F]"> {email}</strong> Please open it  and click <br />
             the button inside to confirm your subsvription
        </p>
        <button className=" mt-auto  md:mt-4  bg-[#1E2337] text-white  w-80 h-13  my-4 
        rounded-lg font-roboto md:pt-24 lg:pt-0 cursor-pointer hover:bg-linear-to-r
         from-pink-500 to-orange-400 " onClick={() => setShowSuccess(false)} >Dismiss Message</button>
        </div>
      </div>
    </div>
  )
}


export default Success
