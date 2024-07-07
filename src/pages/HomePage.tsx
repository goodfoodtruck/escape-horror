import App from "../App"
import { HeaderComponent } from "../components/HeaderComponent"
import { FooterComponent } from "../components/FooterComponent"

export const HomePage = () => {
    return (
        <div className="overflow-auto">
            <HeaderComponent />
            <App />
            <FooterComponent />
        </div>
    )
}