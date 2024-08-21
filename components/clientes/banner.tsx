import Image from "next/image";

const Banner = () => {
    return (
        <div>
            <Image src="/img/banner.jpg" alt="Success" width={600} height={600} className="rounded-lg"/>
        </div>
      );
}
 
export default Banner;
