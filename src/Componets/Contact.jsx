import swal from "sweetalert";
import Title from "../Shared/Title";
import Container from "../Shared/Container";



const Contact = () => {

    const handleSend=e=>{
         e.preventDefault()
         swal("success","Your message is successFully send to Admin panel","success")
    }


    return (
        <div className="bg-black">
             <Container>
             <Title heading={'Contact Me'}></Title>
   <div className="py-10 ">
   
   </div>

        <form onSubmit={handleSend}>
    


    <div className="flex w-full   gap-2">
       
  


        <div className="form-control w-[50%]">
          <label className="label">
            <span className="label-text text-white">First Name</span>
          </label>
          <input  type="text" placeholder="First Name" className="input border-2 border-[#f8f83ce1] w-full" required />
        </div>

        <div className="form-control w-[50%]">
          <label className="label">
            <span className="label-text text-white">Last Name</span>
          </label>
          <input  type="text" placeholder="Last Name" className="input border-2 border-[#f8f83ce1] w-full" required />
        </div>





    </div>
     

    <div className="flex w-full   gap-2">
       
    <div className="form-control w-[50%]">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input name="description" type="text" placeholder="Email" className="input border-2 border-[#f8f83ce1] w-full " required />
        </div>

        <div className="form-control w-[50%]">
          <label className="label">
            <span className="label-text text-white">Phone</span>
          </label>
          <input name="description" type="text" placeholder="Phone" className="input border-2 border-[#f8f83ce1] w-full " required />
        </div>

    </div>

   <textarea  placeholder="Write Your Text.................." className="border-2 border-[#f8f83ce1] w-full mt-6 rounded-lg p-4" name="" id="" cols="30" rows="3"></textarea>
   

       <input className="btn w-full mt-5 bg-[#f8f83ce1] text-black" type="submit" value="Send" />
  </form>
  </Container>
        </div>
    );
};

export default Contact;