import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import ArtBoardContext from '../../context/artboard/context';
import UiContext from '../../context/UI/context';
import { ProjectSkeleton } from '../../components/skeletons/projectSkeleton';




const AllProjects = () => {

    const { allProjects, allArtboardLoading, getAllProjects } = useContext(ArtBoardContext)
    let { isDark } = useContext(UiContext)
    const router = useRouter();


    useEffect(() => {
        getAllProjects();
    }, [])


    const nav = (id) => {
        router.push(`artboard/${id}`)
    }


    return (

        <>
            <h1 className="text-2xl font-bold border-b py-3 mb-6 text-slate-600 dark:text-slate-400  dark:border-slate-600">Your Videos</h1>
            {
                allArtboardLoading ? (
                    allProjects === null ? (
                        <p>You dont have any Project yet, Please import a link</p>
                    ) : (
                        <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5  items-start cursor-pointer" >
                            {
                                allProjects.map((each) => {
                                    return (
                                        <div onClick={() => nav(each.id)} key={each.id} index={each.id} >
                                            <div className="bg-white rounded-lg p-5 space-y-8 h-max shadow">
                                                {/* top */}
                                                <div className="flex justify-between items-center">
                                                    <div className="flex gap-3 md:gap-5 items-center">
                                                        <div>
                                                            <img src={`${each.profileImageUrl}`} alt="img" className="w-14 rounded-full" />
                                                        </div>

                                                        <div>
                                                            <h4 className="font-bold text-sm md:text-base ">{each.name}</h4>
                                                            <p className="font-medium text-slate-600  text-xs ">@{each.username}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* main text */}
                                                <div >
                                                    <h1 className="w-11/12 break-words text-lg" >
                                                        {each.text}
                                                    </h1>
                                                </div>

                                                {/* bottom */}
                                                <div className="space-y-1.5">
                                                    <p className="text-xs text-slate-600">11:40 AM · Nov 16, 2022 · {each.source}</p>
                                                    <div className="border-y p-2.5 ">
                                                        <div className=" text-sm flex justify-between">
                                                            <div className="flex gap-0.5 md:gap-2 text-slate-600">
                                                                <p className="font-bold">{each.retweetCount}</p>
                                                                <p>Retweets</p>
                                                            </div>
                                                            <div className="flex gap-0.5 md:gap-2 text-slate-600">
                                                                <p className="font-bold">{each.quoteCount}</p>
                                                                <p>Quote Tweets</p>
                                                            </div>
                                                            <div className="flex gap-0.5 md:gap-2 text-slate-600">
                                                                <p className="font-bold">{each.likeCount}</p>
                                                                <p>Likes</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </section>
                    )
                ) : (

                    <div>
                        <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 items-start cursor-pointer">
                            {
                                [1, 2, 3, 4, 5, 6].map((n) => <ProjectSkeleton key={n} theme={isDark === "light" ? "light" : "dark"} />)
                            }
                        </section>
                    </div>)
            }
        </>


    )
};

export default AllProjects;