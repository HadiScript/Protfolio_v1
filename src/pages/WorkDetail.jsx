import React from 'react'
import './workdetail.css'
import { useParams } from 'react-router-dom'
import { data } from '../components/work/data'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import SEO from "react-seo-component";

import mine from '../assets/mine.jpeg'

const WorkDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const listdata = data.find(x => x.id.toString() === id.toString())

    return (
        <>
            <SEO
                title="My - Projects"
                titleTemplate="hadiraza.com"
                description={'Syed Hadi Raza Portolio'}
                image={mine}
                pathname="hadiraza.com/detail/1"
            />
            <div className="relative max-w-screen-xl px-4 my-8 mx-auto">
                <div className='my-4'>
                    <div onClick={() => navigate(-1)} ><BiArrowBack style={{ color: "white", fontSize: '2rem', cursor: "pointer" }} /></div>
                </div>

                <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <div className="aspect-w-1 aspect-h-1">
                            <img
                                alt="Mobile Phone Stand"
                                className="object-cover rounded-xl"
                                src={listdata.thumbnail}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 lg:mt-4">
                            <div className="aspect-w-1 aspect-h-1">
                                <img
                                    alt="Mobile Phone Stand"
                                    className="object-cover rounded-xl"
                                    src={listdata.image1}
                                />
                            </div>

                            <div className="aspect-w-1 aspect-h-1">
                                <img
                                    alt="Mobile Phone Stand"
                                    className="object-cover rounded-xl"
                                    src={listdata.image2}
                                />
                            </div>

                            {listdata.image3 &&
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        alt="Mobile Phone Stand"
                                        className="object-cover rounded-xl"
                                        src={listdata.image3}
                                    />
                                </div>
                            }

                            {listdata.image4 &&
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        alt="Mobile Phone Stand"
                                        className="object-cover rounded-xl"
                                        src={listdata.image4}
                                    />
                                </div>
                            }

                            {listdata.image4 &&
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        alt="Mobile Phone Stand"
                                        className="object-cover rounded-xl"
                                        src={listdata.image4}
                                    />
                                </div>
                            }


                            {listdata.image5 &&
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        alt="Mobile Phone Stand"
                                        className="object-cover rounded-xl"
                                        src={listdata.image5}
                                    />
                                </div>
                            }

                            {listdata.image6 &&
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        alt="Mobile Phone Stand"
                                        className="object-cover rounded-xl"
                                        src={listdata.image6}
                                    />
                                </div>
                            }


                        </div>
                    </div>

                    <div className="sticky top-0">

                        <div className="flex justify-between mt-8">
                            <div className="max-w-[35ch]">
                                <h1 className="text-2xl font-bold mt-5">
                                    {listdata.name}
                                </h1>

                                <p className="flex mt-0.5 text-sm">
                                    {listdata.category}
                                </p>

                                <p className="flex mt-0.5 font-bold " style={{ color: "#00ADB5" }}>
                                    {listdata.techs}
                                </p>
                                <p className="flex mt-0.5 font-bold " style={{ color: "#00ADB5" }}>
                                    {listdata.design}
                                </p>
                            </div>
                            <div className="max-w-[35ch]">
                                <button className={`${listdata.preview ? 'btn btn-primary' : 'btn-disable'} mt-5 `}>Preview</button>
                            </div>

                        </div>

                        <details className="relative mt-4 group">
                            <summary className="block ">
                                <div>

                                    <div className="my-4  font-medium" style={{ borderTop: "1px solid white" }} />
                                    <div className="">
                                        <p>
                                            " {listdata.idea} "
                                        </p>
                                    </div>
                                    <div className="mt-4  font-medium" style={{ borderTop: "1px solid white" }} />
                                    <div className="mt-4  font-medium   " >
                                        Team : <span className='font-bold' style={{ color: "#00ADB5" }}>{listdata.Team}</span>
                                    </div>
                                    <div className="my-4  font-medium " >
                                        Manage by : <span className='font-bold' style={{ color: "#00ADB5" }}>{listdata.managedBy}</span>
                                    </div>

                                    <div className="mt-4  font-medium " >
                                        methodology : <span className='font-bold' style={{ color: "#00ADB5" }}>{listdata.methods}</span>
                                    </div>

                                    <div className="mt-4  font-medium " >
                                        Features : <span className='font-bold' style={{ color: "#00ADB5" }}>{listdata.features}</span>
                                    </div>

                                    <a target='_black' href={listdata.githubRepo} className="mt-4  font-medium " >
                                        Github Repo : <span className='font-bold' style={{ color: "#00ADB5" }}>{listdata.githubRepo}</span>
                                    </a>

                                </div>
                            </summary>
                        </details>


                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkDetail



// <style>
//   .prose h3 {
//     margin-bottom: 1rem;
//     padding-bottom: 0.5rem;
//     border-bottom: 1px solid rgb(243 244 246);

//     /* @apply mb-1 pb-2 border-b border-gray-200; */
//   }

//   .prose iframe {
//     width: 100%;
//     margin-top: 1.5rem;
//     aspect-ratio: 16 / 9;
//     border-radius: 0.75rem;

//     /* @apply w-full aspect-video mt-6 rounded-xl; */
//   }
// </style>
