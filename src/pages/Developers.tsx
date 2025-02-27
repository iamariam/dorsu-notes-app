import React from 'react'

const Developers = () => {
  return (
    <div className='container mx-auto p-5'>
        <h1>Developers</h1>
        <div className='p-5 m-5 grid grid-cols-6'>            
                {/* Add your profile here. You can upload your image to the repo under "images"  directory
                    and link it here.                
                */}
                  <div className="flex flex-wrap justify-center">
                    <div className="w-64 sm:w-64 px-4">
                      <img src="https://avatars.githubusercontent.com/u/112953802?s=400&u=7636edfc7a41e96a8689111d320fb48928a1cbd3&v=4" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                    <h3 className='font-bold mr-1'>Sitti Mariam Macabuat, </h3>
                    <p className='font-thin italic'>Student Developer</p>
                </div> 

                {/* grid item */}
                <div className="flex flex-wrap justify-center">
                    <div className="w-64 sm:w-64 px-4">
                        <img src="https://avatars.githubusercontent.com/u/74034797?s=400&u=8d250db9bceb4f7415526ea5b276c203f10e3fa9&v=4" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                    <h3 className='font-bold mr-1'>Rassey L. Perez, </h3>
                    <p className='font-thin italic'>Php Developer</p>
                </div>           
                {/* grid item */}               
               

        </div>
    </div>
  )
}

export default Developers
