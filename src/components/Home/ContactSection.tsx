import Image from 'next/image';

export default function ContactSection() {
  return (
    <div className="py-12 px-4">
        <div className="pt-8 bg-black bg-opacity-5 rounded-2xl pl-4 mx-auto max-w-5xl shadow-sm">
            <h3 className="text-primary-dark text-3xl font-viga max-w-lg mx-auto text-center pr-4">Thanks for staying with ADN. Share your thoughts with us.</h3>
            <div className="pt-4 pb-8 grid md:grid-cols-2 justify-center items-center bg-orange-oval">
                <form className='pr-4'>
                    <input type="text" name="name" className="py-3 my-3 px-4 outline-none bg-white font-viga rounded-full w-full" placeholder="Name" required/>
                    <input type="email" name="email" className="py-3 my-3 px-4 outline-none bg-white font-viga rounded-full w-full" placeholder="Email" required/>
                    <textarea name="feedback" className="py-3 my-3 px-4 outline-none bg-white font-viga rounded-3xl w-full resize-none min-h-32" placeholder="Your feedback" required></textarea>
                </form>
                <Image src={"/ADN.png"} className='px-4 w-full max-w-72 mx-auto' width={273} height={173} alt='ADN'/>
            </div>
        </div>
    </div>
  )
}
