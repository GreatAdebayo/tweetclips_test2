import { useContext } from "react";
import UiContext from "../../context/UI/context";




const VideoComplete = () => {

    let { showItem } = useContext(UiContext);

    return (
        <>

            <div className="absolute top-0 left-0" >
                <div className="inset-0 fixed bg-slate-800 w-screen z-50 h-[100vh] bg-opacity-80 flex items-center px-3">

                    <div data-aos="fade-down" data-aos-duration="600" data-aos-easing="ease-in-out" className="rounded-lg space-y-4 bg-white dark:bg-slate-700 mx-auto w-full lg:w-2/3 2xl:w-1/2 py-3">
                        <div className="flex justify-between items-center  2xl:px-8  border-b dark:border-slate-600 py-4  px-4 md:px-6">
                            <div>
                                <h2 className="text-sm 2xl:text-xl font-bold dark:text-slate-400">Video Rendered</h2>
                            </div>

                            <div>
                                <button onClick={() => showItem('generated')} className="text-lg 2xl:text-2xl dark:text-slate-300"><i class="lni lni-close"></i></button>
                            </div>
                        </div>


                        <div className="space-y-8 py-6">
                            <div>
                                <iframe
                                    className="mx-auto rounded-2xl w-5/6 h-48 md:h-96"

                                    src={`https://res.cloudinary.com/dylrl8ydb/video/upload/v1668512739/samples/cld-sample-video.mp4`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                />
                            </div>

                            <div className="space-y-6 dark:text-slate-300">
                                <h3 className="text-center text-lg font-bold">Share Video</h3>
                                <div className="flex gap-6 md:gap-10 text-5xl justify-center items-center" >
                                    <div className="text-center space-y-1 cursor-pointer">
                                        <div><i className="lni lni-whatsapp text-green-500"></i></div>
                                        <p className="font-semibold hidden md:block text-sm">Whatsapp</p>
                                    </div>
                                    <div className="text-center space-y-1 cursor-pointer">
                                        <i className="lni lni-twitter-original text-blue-500"></i>
                                        <p className="font-semibold hidden md:block text-sm">Twitter</p>
                                    </div>
                                    <div className="text-center space-y-1 cursor-pointer">
                                        <i className="lni lni-instagram-original text-red-600   "></i>
                                        <p className="font-semibold hidden md:block text-sm">Instagram</p>
                                    </div>
                                    <div className="text-center space-y-1 cursor-pointer">
                                        <i className="lni lni-facebook-oval text-blue-500"></i>
                                        <p className="font-semibold hidden md:block text-sm">Facebook</p>
                                    </div>
                                    <div className="text-center space-y-1 cursor-pointer">
                                        <div className="mx-auto text-white bg-black text-base flex justify-center items-center h-14 w-14 rounded-full"><i class="lni lni-cloud-download"></i></div>
                                        <p className="font-semibold hidden md:block text-sm">Download</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};


export default VideoComplete;