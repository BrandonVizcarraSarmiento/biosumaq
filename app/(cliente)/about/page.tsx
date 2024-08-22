import Info from "./components/info";
import QuienesSomos from "./components/quienesSomos";

const about = () => {
    return (
        <div className="py-4">
            <QuienesSomos />
            <Info />
        </div>
    );
}

export default about;