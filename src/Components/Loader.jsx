import React from 'react'

function Loader() {
  return (
    <>
        <div class="flex justify-center gap-2">
                <div class="w-3 h-3 rounded-full animate-pulse bg-blue-800"></div>
                <div class="w-3 h-3 rounded-full animate-pulse bg-blue-800"></div>
                <div class="w-3 h-3 rounded-full animate-pulse bg-blue-800"></div>
            </div>
    </>
  )
}

export default Loader