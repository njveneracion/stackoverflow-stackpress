export default function RightSideBar() {
  return (
    <>
      {/* Right Sidebar */}
        <div className='flex-1 lg:max-w-xs p-4 lg:p-6 bg-gray-50 border-l border-gray-200'>
          <div className='space-y-6'>
            {/* Featured Section */}
            <div className='bg-white rounded-lg shadow-sm border p-4'>
              <h3 className='font-semibold text-gray-900 mb-3 flex items-center'>
                <span className='w-2 h-2 bg-yellow-400 rounded-full mr-2'></span>
                Featured
              </h3>
              <div className='space-y-2 text-sm text-gray-600'>
                <div className='hover:text-blue-600 cursor-pointer'>Latest updates and announcements</div>
                <div className='hover:text-blue-600 cursor-pointer'>Community guidelines</div>
                <div className='hover:text-blue-600 cursor-pointer'>Getting started guide</div>
              </div>
            </div>
            
            {/* Hot Questions */}
            <div className='bg-white rounded-lg shadow-sm border p-4'>
              <h3 className='font-semibold text-gray-900 mb-3 flex items-center'>
                <span className='w-2 h-2 bg-orange-500 rounded-full mr-2'></span>
                Hot Questions
              </h3>
              <div className='space-y-3'>
                <div className='text-sm'>
                  <div className='text-blue-600 hover:text-blue-800 cursor-pointer line-clamp-2'>
                    How to implement responsive design in React?
                  </div>
                  <div className='text-xs text-gray-500 mt-1'>12 answers • 45 votes</div>
                </div>
                <div className='text-sm'>
                  <div className='text-blue-600 hover:text-blue-800 cursor-pointer line-clamp-2'>
                    Best practices for TypeScript development
                  </div>
                  <div className='text-xs text-gray-500 mt-1'>8 answers • 32 votes</div>
                </div>
              </div>
            </div>
            
            {/* Tags */}
            <div className='bg-white rounded-lg shadow-sm border p-4'>
              <h3 className='font-semibold text-gray-900 mb-3'>Popular Tags</h3>
              <div className='flex flex-wrap gap-2'>
                <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200 cursor-pointer'>
                  react
                </span>
                <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200 cursor-pointer'>
                  typescript
                </span>
                <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200 cursor-pointer'>
                  javascript
                </span>
                <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200 cursor-pointer'>
                  css
                </span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
