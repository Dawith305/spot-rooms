function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 
                        py-16 px-32 bg-gray-100">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How it works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Plus Customer</p>
                <p>Luxe Customer</p>
            </div>
            
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Gift Cards</p>
                <p>Diversity & Belonging</p>
                <p>Guest Referrals</p>
                <p>Against Discrimination</p>
                <p>Accessibility</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Host you home</p>
                <p>Host and Onile Experience</p>
                <p>Responsible Host</p>
                <p>Resource Center</p>
                <p>Community Center</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Our COVID-19 Response</p>
                <p>Help Center</p>
                <p>Cacellation options</p>
                <p>Neighborhood Support</p>
                <p>Trust & Safety</p>
            </div>
        </div>
    )
}

export default Footer
