interface PhotoGalleryProps {
    images: {
        src: string;
        alt: string;
    }[]
}
const PhotoGallery = () => {
    return (
        <>
            {/* PhotoGallery */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">Photo Gallery</h2>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PhotoGallery