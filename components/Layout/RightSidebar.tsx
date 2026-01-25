import React from 'react'

const RightSidebar = () => {
  return (
    <>
      <div className='w-[300px] font-grotesk h-screen overflow-y-auto border-l-3 border-foreground'>
        <div className='pt-2 text-center flex flex-col'>
          <h1 className='text-3xl p-2 font-bold border-b-3 border-foreground'>On This Page</h1>
          <div className='flex flex-col  divide-y-3 divide-foreground'>
            <h1 className='text-xl p-2 font-bold'>Components</h1>
            <h1 className='text-xl p-2 font-bold'>Components</h1>
          </div>
        </div>
      </div>
    </>

  )
}

export default RightSidebar