
import { Player } from "@remotion/player";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ArtBoard } from "../../components/ArtBoard";
import { ArtboardSkeleton } from "../../components/skeletons/artboardSkeleton";
import ArtBoardContext from "../../context/artboard/context";
import UiContext from "../../context/UI/context";
import { MyComposition } from "../../remotion/composition";









const Artboard = () => {

    let { isDark } = useContext(UiContext)
    let { artboardLoading, artboardProps, singleArtboard } = useContext(ArtBoardContext);



    return (
        <>
            <div className="mb-6 lg:my-0 lg:hidden">
                <button onClick={() => router.back()} className="font-semibold bg-slate-300 px-6 py-2 rounded-full text-xs md:text-sm"> <i class="lni lni-arrow-left"></i> Back</button>
            </div>

            <section className="bg-blue-500 py-8 md:py-16 2xl:py-24 rounded-lg">
                {
                    artboardLoading ?
                        <section className="flex flex-col justify-between p-6 md:p-14 h-max gap-12 md:gap-24 rounded-xl shadow-2xl w-5/6 2xl:w-2/3 mx-auto" style={{ backgroundColor: `${artboardProps.bgColor}`, color: `${artboardProps.fontColor}`, backgroundImage: `url(${artboardProps.bgUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            {/* top */}
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3 md:gap-5 items-center">
                                    <div>
                                        <img src={singleArtboard.profileImageUrl} alt="img" className="w-10 md:w-20 xl:w-24 rounded-full" />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-base md:text-lg xl:text-xl">{singleArtboard.name}</h4>
                                        <p className="text-xs md:text-base xl:text-lg" style={{ color: `${artboardProps.fontColor}` }}>@{singleArtboard.username}</p>
                                    </div>
                                </div>
                            </div>

                            {/* main text */}
                            <div >
                                <h1 className="w-11/12 break-words font-semibold" style={{ fontFamily: ` ${artboardProps.fontStyle}`, fontSize: `${artboardProps.fontSize}px` }} >
                                    {singleArtboard.text}
                                </h1>
                            </div>


                            {/* bottom */}
                            <div className="space-y-3" style={{ color: `${artboardProps.fontColor}` }}>
                                <p className="text-xs md:text-base xl:text-lg ">11:40 AM · Nov 16, 2022 · {singleArtboard.source}</p>
                                <div className="border-y p-2.5 md:p-4">
                                    <div className="text-[10.5px] md:text-base lg:text-sm xl:text-base flex justify-between">
                                        <div className="flex gap-0.5 md:gap-2 ">
                                            <p className="font-bold">{singleArtboard.retweetCount}</p>
                                            <p>Retweets</p>
                                        </div>
                                        <div className="flex gap-0.5 md:gap-2 ">
                                            <p className="font-bold">{singleArtboard.quoteCount}</p>
                                            <p>Quote Tweets</p>
                                        </div>
                                        <div className="flex gap-0.5 md:gap-2 ">
                                            <p className="font-bold">{singleArtboard.likeCount}</p>
                                            <p>Likes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section> :
                        <div className='w-5/6 2xl:w-2/3 mx-auto'>
                            {
                                [1].map((n) => <ArtboardSkeleton key={n} theme={isDark === "light" ? "light" : "dark"} />)
                            }
                            <ArtBoard artboardProps={artboardProps} className="hidden"/>
                        </div>

                }
            </section>

            {/* <Player
                component={MyComposition}
                durationInFrames={120}
                compositionWidth={1280}
                compositionHeight={720}
                fps={30}
                controls
            /> */}
        </>
    )
};


export default Artboard;