import React from 'react'

function Card({username}) {
    console.log(username);

    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img clasname="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg" alt="" width="384" height="512" />
                <div clasname="pt-6 md:p-8 text-center md:text-left space-y-4">

                    <blockquote>
                        <h1 className='text-3xl font-bold bg-blue-200'>{username}</h1>
                        <p clasname="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption clasname="font-medium">
                        <div clasname="text-sky-500 dark:text-sky-400">
                            Sarah Dayan
                        </div>
                        <div clasname="text-slate-700 dark:text-slate-500">
                            Staff Engineer, Algolia
                        </div>
                    </figcaption>
                </div>
            </figure></div>
    )
}

export default Card
