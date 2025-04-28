import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-10">
            <div className="w-full px-10 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <Image width={200} height={200} src="/assets/logo.png" alt="HD and Associates Logo" className="h-16 w-16" />
                            <h3 className="text-xl font-bold ml-2">HD<br />AND ASSOCIATES</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Office No.411, 4th Floor, Paresh Market Building, Opera House, Mumbai-400 004.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About Us</a></li>
                            <li><a href="/commitment" className="text-gray-600 hover:text-gray-900 text-sm">Our Commitment</a></li>
                            <li><a href="/team-members" className="text-gray-600 hover:text-gray-900 text-sm">Team Members</a></li>
                            <li><a href="/service" className="text-gray-600 hover:text-gray-900 text-sm">Our Services</a></li>
                            <li><a href="/client" className="text-gray-600 hover:text-gray-900 text-sm">Our Clients</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-600 text-sm">+91 9699676825</li>
                            <li>
                                <a href="mailto:hsdikshit@hdandassociates.com" className="text-gray-600 hover:text-gray-900 text-sm">
                                    hsdikshit@hdandassociates.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Location</h4>
                        <p className="text-gray-600 text-sm">
                            Office No.411, 4th Floor, Paresh Market Building, Opera House Mumbai-400 004.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-center text-gray-400 text-sm">
                        Copyright © 2023 HD and Associates. All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}