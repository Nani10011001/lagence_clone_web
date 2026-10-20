import garmentGirl from "../assets/gramentGril.png"
import blendedBeauty from "../assets/Bendry-Paris-Peeling-marin-visage (1).jpeg"
import phoneShorts from "../assets/phone-shots.jpg"
const Section7 = () => {
  return (
    <section className='bg-surface md:relative w-full px-4 md:px-11 h-[300vh]'>
        <div className='flex flex-col items-center gap-2 '>
            <p className='font-lexend text-xs tracking-tight uppercase my-2'>Achievements</p>
            <p className='font-playfair text-[40px] tracking-tight leading-10 text-center md:max-w-[50rem]'>Some of the <em> brands</em> and <em>companies</em> we have worked with.</p>
            <p className="text-lexend uppercase font-light text-center md:max-w-[50rem]">We work for different sectors, but we have particular expertise in the beauty and wellness, food and lifestyle sectors.</p>
        </div>
     <div className="flex w-full mt-20  justify-center h-full ">  
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-20'>
         <div className="flex flex-col gap-4">
    <img src={garmentGirl} alt="" className="h-[400px] object-cover" />
    <img src={phoneShorts} alt="" />
    
         </div>
         <div>
<img src={blendedBeauty} alt="" className="h-[500px] object-cover" />
         </div>

      </div>
      </div>
    </section>
  )
}

export default Section7
