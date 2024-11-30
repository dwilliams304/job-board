import React, { Dispatch, FormEvent, SetStateAction } from "react";
import { Button } from "../../common";
import { useState } from "react";

const descriptions = [
    "Ex.: "
]

type ReportModalProps = {
    showReportModal: boolean;
    setShowReportModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ReportJob(props: ReportModalProps){
    const onReportSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.setShowReportModal(false);
    }
    
    return(
        <div className={`w-full min-h-screen m-0 top-0 left-0 fixed bg-black/75 z-50 
        ${props.showReportModal ? "block" : "hidden"}`}>
            <div className="flex flex-col relative mx-auto lg:mt-20 xl:w-1/2 w-full text-center align-middle">
                <p className="font-bold absolute top-2 right-4 cursor-pointer" onClick={() => props.setShowReportModal(false)}>
                    X
                </p>

                <form className="w-full lg:py-8 lg:px-12 p-4 bg-slate-200 lg:shadow-xl" onSubmit={onReportSubmit}>
                    <h2 className="text-xl font-bold">Report Job</h2>
                    <div className="flex flex-col space-y-4 w-4/5 mx-auto">
                        <div className="flex flex-col">
                            <label htmlFor="reason" className="text-left">
                                Please select a reason <span className="text-red-600"> *</span>
                            </label>
                            <select className="w-full border bg-white p-2 cursor-pointer divide-y-2">
                                <option>Missing/Incorrect Details</option>
                                <option>Offensive/Discriminatory Language</option>
                                <option>Suspicious/Fraudulent Post</option>
                                <option>Other</option>
                            </select>
                            <div className="text-left px-2">
                                <p className="text-gray-500 text-sm">Ex: </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-left" htmlFor="additional">
                                Please provide more details <span className="text-red-600"> *</span>
                            </label>
                            <textarea
                                name="additional"
                                className="border w-full h-60"
                            />
                        </div>

                        <Button
                            function={(e) => {
                                onReportSubmit(e);
                                window.alert("Thank you for your report!")
                            }}
                            type="Primary"
                            title="Submit report"
                            text="Submit Report"
                            disabled={false}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}