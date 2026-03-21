import Info from "./Info";
import Projects from "./Projects";
import Tecnologies from "./Technologies/Technologies";


const ProfilePage = () => {
    return (
    <div className="flex flex-col gap-10">
        <Info/>
        <Tecnologies/>
        <Projects/>
    </div>
    )
}

export default ProfilePage;











