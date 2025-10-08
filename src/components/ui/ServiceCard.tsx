import { PiCheckLight } from "react-icons/pi";

type TServiceCardProps = {
   
        image: string;
        title: string;
        description: string;
        items: string[];
  
}
const ServiceCard = ({service}: {service: TServiceCardProps}) => {
    return (
         <div 
                     
                      className="relative group bg-white  overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
                    >
                     <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0 rounded-t-md">
                     <img src={service.image} alt={service.title} className="w-full h-[200px] object-cover rounded-t-md" />
                     </div>
        
                     <div className="p-6">
                      <h3 className="text-xl font-medium mb-2 text-primary">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2 text-gray-600">
                        {service.items.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <PiCheckLight className="w-5 h-5 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                      {/* Hover Overlay with Description */}
                      <div className="absolute inset-0 flex flex-col   items-center justify-center text-center px-6 bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-lg leading-relaxed bengali">{service.description}</p>
                        <div>
                          <button className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                            <span className="bengali">বিস্তার করুন</span>
                          </button>
                        </div>
                      </div>
                    </div>
    )
}


export default ServiceCard
