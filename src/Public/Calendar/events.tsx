export function Events() {
    return (
        <section className="p-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-colors duration-300">
            <div>
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center transition-colors">
                    Upcoming Events
                </h1>

                <hr className="my-6 border-gray-300 dark:border-gray-700 transition-colors" />

                {/* List of events */}
                <ul className="space-y-10">
                    {[
                        {
                            event: "Summer Camps",
                            description: [
                                <span>Please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSdI_Fpb4l8BUUU8UWvdNlCfj-BZWhu-oDeEdjw04wjlOyFqlQ/viewform"className="text-blue-500 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200">this registration form</a> to sign up</span>,
                            ],
                            flyers: [
                                {
                                    title: "Basics Summer Camp",
                                    url: "/flyers/basics.jpg",
                                },
                                {
                                    title: "Girls Confidence Summer Camp",
                                    url: "/flyers/girls-confidence.jpg",
                                },
                                {
                                    title: "Confidence Summer Camp",
                                    url: "/flyers/confidence.jpg",
                                }
                            ],
                        },
                    ].map(({ event, description, flyers }) => (
                        <li
                            key={event}
                            className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md transition-colors"
                        >
                            {/* Event label */}
                            <strong className="text-2xl text-gray-800 dark:text-white border-l-4 border-yellow-400 pl-4">
                                {event}
                            </strong>
                            {/* Event description */}
                            {description.map((line, index) => (
                                <span
                                    key={index}
                                    className="ml-6 text-lg text-gray-700 dark:text-gray-300 transition-colors">
                                    {line}
                                </span>
                            ))}
                            {/* Flyer list */}
                            <div className="flex flex-col gap-5 md:flex-row">
                                {flyers.map((flyer, index) => (
                                    <a
                                        href={flyer.url}
                                        className="grow-1 shrink-1 basis-0"
                                    >
                                        <img
                                            key={index}
                                            src={flyer.url}
                                            alt={flyer.title}>
                                        </img>
                                    </a>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    );
}
