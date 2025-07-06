import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export function FindJobCard() {
    return (
        <div 
            className="relative overflow-hidden py-16" // Removed min-h-screen, added vertical padding
            style={{
                backgroundImage: "url('/d7419b2f-8844-49f9-9690-f5a8982945c2_removalai_preview.png')",
                backgroundSize: "contain",
                backgroundPosition: "calc(100% - 200px) center", // Сдвиг влево
                backgroundRepeat: "no-repeat",
                backgroundColor: "#f8fafc"
            }}
        >
            <div className="relative z-10 flex items-center justify-start pl-8 lg:pl-16">
                <div className="w-full max-w-2xl">
                    <div className="mb-8">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                            Find a job that aligns with your interests and skills
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Thousands of jobs in all the leading sectors are waiting for you.
                        </p>
                    </div>

                    <Card className="bg-white border border-gray-200 rounded-xl shadow-xl p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input 
                                    type="text"
                                    placeholder="Job title, Keyword..."
                                    className="pl-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500/20"
                                />
                            </div>
                            <div className="flex-1 relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input 
                                    type="text"
                                    placeholder="Location"
                                    className="pl-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500/20"
                                />
                            </div>
                            <Button className="h-12 px-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                                Find Job
                            </Button>
                        </div>
                    </Card>

                    <div className="mt-6 text-sm text-gray-500">
                        <span className="mr-2">Suggestion:</span>
                        <span className="text-gray-700">UI/UX Designer, Programming, </span>
                        <span className="text-purple-600 font-medium">Digital Marketing</span>
                        <span className="text-gray-700">, Video, Animation.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
