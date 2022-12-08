
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import DashboardLayout from '../../components/layouts/dashboardLayout';
import ArtBoardContext from '../../context/artboard/context';
import Artboard from './artboard'
import Controls from './controls'


const NewProject = () => {

    const router = useRouter();
    let { artboardId } = router.query

    let { getSingleArtboard } = useContext(ArtBoardContext);

    useEffect(() => {
        if (artboardId) {
            getSingleArtboard(artboardId)
        }
    }, [artboardId]);

    return (
        <>

            <Head>
                <title>Artboard</title>
            </Head>


            <DashboardLayout>
                <section className='flex flex-col lg:flex-row p-5 lg:p-10 bg-slate-100 min-h-screen dark:bg-slate-900'>
                    <div className='w-full lg:fixed lg:w-72 xl:w-1/4 px-8 inset-y-16 lg:mt-16 lg:h-auto dark:bg-slate-800 lg:py-10 bg-white rounded-xl lg:rounded-2xl xl:rounded-[1.8rem] flex order-2 lg:order-1 overflow-y-scroll'>
                        <div className='w-full'>
                            <Controls />
                        </div>
                    </div>
                    <div className='lg:w-2/3 xl:flex-1 lg:ml-80 xl:ml-[28%] my-8 lg:my-20 order-1 lg:order-2 w-full mt-16 md:mt-20'>
                        <Artboard />
                    </div>
                </section>
            </DashboardLayout>
        </>
    )
};


export default NewProject;