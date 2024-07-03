

const Contact = () => {
    const handleContact = (e) => {
        e.preventDefault()
        console.log('submit meassage is ok')
    }
    return (
        <div id="contact" className="my-10">
            <h2 className="text-center">Have Question?</h2>
            <h1 className="text-center text-3xl font-bold">Contact me Now</h1>
            <div>
                <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                    <form className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x-4">

                        <div className="py-6 md:py-0 md:px-6">
                            <label className="block">
                                <span className="mb-1">Your name</span>
                                <input type="text" placeholder="your name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 border p-3 mb-8" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Your email</span>
                                <input type="email" placeholder="Your email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 border p-3 mb-8" />
                            </label>

                            <label className="block">
                                <span className="mb-1">Your phone</span>
                                <input type="text" placeholder="Your phone" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 border p-3 mb-8" />
                            </label>

                        </div>

                        <div noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">

                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea rows="10" placeholder="Your message" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 border p-3 mb-8"></textarea>
                            </label>
                            <button onClick={handleContact} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contact;