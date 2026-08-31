import { Events } from "./events";
import { LoganSchedule, SmithfieldSchedule } from './schedule';

export function Events_Schedule() {
    return (
        <div className="flex flex-col items-center justify-center custom-bg custom-dark transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8"
        style= {{minHeight: 'calc(100vh - 5rem)'}}
        >
            <div className="w-full max-w-7xl space-y-8">
                {/* Header */}
                <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 text-center transition-colors duration-300">
                    Events & Schedule
                </h1>

                {/* Events Component */}
                <Events />

                {/* Schedule Components */}
                <LoganSchedule />
                <SmithfieldSchedule />
            </div>
        </div>
    );
}
