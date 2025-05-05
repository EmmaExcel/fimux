import { useRef } from "react"
import { Phone, Clock, MapPin, Truck } from "lucide-react"
import "./delivery.css"

export default function DeliveryPage() {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)
    const infoRef = useRef(null)

    // Inline styles for main components
    const sectionStyle = {
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0a0a0a, #121212)",
        padding: "120px 0",
        color: "white",
        zIndex: 10,
        overflow: "hidden"
    };

    const containerStyle = {
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "0 24px",
        position: "relative",
        zIndex: 10
    };

    const titleStyle = {
        fontSize: "3.5rem",
        fontWeight: "700",
        color: "white",
        marginBottom: "24px",
        letterSpacing: "-0.5px",
        textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        textAlign: "center"
    };

    const decorationWrapperStyle = {
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px"
    };

    const decorationStyle = {
        height: "3px",
        width: "120px",
        background: "linear-gradient(90deg, rgba(245, 158, 11, 0.3), #f59e0b, rgba(245, 158, 11, 0.3))",
        borderRadius: "3px"
    };

    const subtitleStyle = {
        fontSize: "1.25rem",
        color: "#a3a3a3",
        maxWidth: "600px",
        margin: "0 auto 60px",
        lineHeight: "1.6",
        textAlign: "center"
    };

    const iconContainerStyle = {
        margin: "0 auto 60px",
        display: "flex",
        justifyContent: "center"
    };

    const iconCircleStyle = {
        background: "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05))",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 30px rgba(245, 158, 11, 0.15)"
    };

    const infoContainerStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        marginBottom: "60px",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto"
    };

    const infoItemStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(18, 18, 18, 0.7)",
        padding: "25px",
        borderRadius: "12px",
        border: "1px solid #222",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease"
    };

    const infoIconContainerStyle = {
        background: "linear-gradient(135deg, #f59e0b, #d97706)",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "25px",
        flexShrink: 0,
        boxShadow: "0 8px 20px rgba(245, 158, 11, 0.3)"
    };

    const infoContentStyle = {
        textAlign: "left"
    };

    const infoTitleStyle = {
        fontSize: "1.2rem",
        fontWeight: "600",
        color: "white",
        marginBottom: "8px",
        letterSpacing: "0.5px"
    };

    const infoValueStyle = {
        fontSize: "1.5rem",
        fontWeight: "700",
        color: "#f59e0b",
        letterSpacing: "0.5px"
    };

    const notesContainerStyle = {
        backgroundColor: "rgba(18, 18, 18, 0.5)",
        borderRadius: "12px",
        padding: "30px",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "left",
        border: "1px solid #222"
    };

    const noteStyle = {
        color: "#a3a3a3",
        marginBottom: "12px",
        fontSize: "1.05rem",
        lineHeight: "1.6"
    };

    return (
        <section ref={sectionRef} style={sectionStyle}>
            {/* Decorative elements with inline styles */}
            <div style={{
                position: "absolute",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0) 70%)",
                width: "600px",
                height: "600px",
                top: "-200px",
                left: "-150px",
                zIndex: 0
            }}></div>

            <div style={{
                position: "absolute",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0) 70%)",
                width: "500px",
                height: "500px",
                bottom: "-150px",
                right: "-150px",
                zIndex: 0
            }}></div>

            <div style={containerStyle}>
                <div ref={contentRef} style={{ opacity: 1 }}>
                    <h1 style={titleStyle}>Delivery Service</h1>
                    <div style={decorationWrapperStyle}>
                        <div style={decorationStyle}></div>
                    </div>
                    <p style={subtitleStyle}>
                        Enjoy our exquisite cuisine in the comfort of your home or office
                    </p>

                    <div style={iconContainerStyle}>
                        <div style={iconCircleStyle}>
                            <Truck style={{ width: "80px", height: "80px", color: "#f59e0b" }} />
                        </div>
                    </div>

                    <div ref={infoRef} style={infoContainerStyle} className="delivery-info-container">
                        {/* <div style={infoItemStyle} className="delivery-info-item">
                            <div style={infoIconContainerStyle}>
                                <Phone style={{ color: "#000", width: "28px", height: "28px" }} />
                            </div>
                            <div style={infoContentStyle}>
                                <h3 style={infoTitleStyle}>Call to Order</h3>
                                <p style={infoValueStyle}>09167714748</p>
                            </div>
                        </div> */}

                        <div style={infoItemStyle}>
                            <div style={infoIconContainerStyle}>
                                <Phone style={{ color: "#000", width: "28px", height: "28px" }} />
                            </div>
                            <div style={infoContentStyle}>
                                <h3 style={infoTitleStyle}>Call to Order</h3>
                                <p style={infoValueStyle}>09167714748</p>
                            </div>
                        </div>

                        <div style={infoItemStyle}>
                            <div style={infoIconContainerStyle}>
                                <MapPin style={{ color: "#000", width: "28px", height: "28px" }} />
                            </div>
                            <div style={infoContentStyle}>
                                <h3 style={infoTitleStyle}>Delivery Only</h3>
                                <p style={infoValueStyle}>10AM - 8PM</p>
                            </div>
                        </div>
                    </div>

                    {/* <div style={notesContainerStyle}>
                        <p style={noteStyle}>• Minimum order value may apply</p>
                        <p style={noteStyle}>• Please allow 45-60 minutes for delivery</p>
                        <p style={noteStyle}>• Special requests can be accommodated</p>
                        <p style={{ ...noteStyle, marginBottom: 0 }}>• Contact us for catering and large orders</p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
