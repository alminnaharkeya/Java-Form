        
        const Form = document.querySelector("form");
        const Name = Form.querySelector("#name");
        const Username =Form.querySelector("#username");
        const  Email = Form.querySelector("#email");
        const Phone = Form.querySelector("#phone");
        const Password = Form.querySelector("#password");
        const Confrimpassword = Form.querySelector("#confrimPassword");

    // console.log(Email);

        Form.addEventListener("submit", formHandler);
        function formHandler (e) {
        e.preventDefault ();


     // console.log(e);


    const formInfo = {

        Name :  Name.value,
        Username : Username.value,
        Email :  Email.value,
        Phone  :  Phone.value,
        Password : Password.value,
        Confrimpassword : Confrimpassword.value,

    };
        
        Name.value = "";
        Username.value = "";
        Email.value = "";
        Phone.value = "";
        Password.value = "";
        Confrimpassword.value = "";

        console.log(formInfo);

};