
const LoadingSpinner = () => {
    return (
        <>
            <div className="d-flex justify-content-center spinner">
                <div class="spinner-border text-info" style={{ width: "5rem", height: "5rem" }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}
    
export default LoadingSpinner