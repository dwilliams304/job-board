export default function ReportJob(){
    return(
        <div className="w-1/2 h-1/2 mx-auto my-auto absolute bg-slate-200">
            <h2>Report Job</h2>
            <input
                type="text"
                placeholder="Text"
                name="title"
                className="border p-2"
            />
        </div>
    )
}