"use client"


export function Features() {
    return (
        <div className="flex flex-col items-center gap-24 p-12 px-24 mb-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-56 items-center">
                <p className="sm:text-5xl text-4xl font-semibold w-[25rem] text-center">Made for modern product teams</p>
                <p className="text-sm text-neutral-600 w-[20rem]">Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="h-120 w-96 flex flex-col justify-end text-4xl font-semibold bg-neutral-950">
                    Purpose-built for product development
                </div>
                <div className="h-120 w-96 flex flex-col justify-end text-4xl font-semibold bg-neutral-950">
                    Designed to move fast
                </div>
                <div className="h-120 w-96 flex flex-col justify-end text-4xl font-semibold bg-neutral-950">
                    Crafted to perfection
                </div>
            </div>
        </div>
    )   
}