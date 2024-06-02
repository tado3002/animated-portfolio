import emailjs from "@emailjs/browser" 


const sendEmail = (e,form,setFailed,setSuccess) => {
  e.preventDefault();

  emailjs
    .sendForm("service_sy3wt2l","template_nxgadl9", form.current, {
      publicKey: "ClwOiuFeda0APOotQ"
    })

    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        return setSuccess(true)
      },
      (error) => { 
        console.log('FAILED...', error.text);
        return setFailed(true)
      },
    )
  ;
};

export default sendEmail 
