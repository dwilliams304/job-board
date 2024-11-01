export default function CreateJobPost(){
    return(
        <div className="flex-grow">
            <div className="w-1/2 mx-auto py-6 flex flex-col space-y-6">
                <div>
                    <label htmlFor='job-title' className='block text-md font-bold mb-2'>Job Title</label>
                    <input
                        type='job-title'
                        name='job-title'
                        id='job-title'
                        placeholder='Job Title'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                    />
                </div>
            </div>
        </div>
    )
}