import Image from "next/image";

const Contact = () =>{
    return (
        <>
            <div className="flex p-2">
                <div>
                    <h1 className="flex-1 bg-teal-400 p-4 m-2">here goes an image</h1> 
                </div>
                <div className="flex-1 bg-teal-400 p-4 m-2">
                    <form action="">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Phone Number (Optional)"/>
                        <textarea placeholder="Message"></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;