import { Github, Linkedin, Mail } from "lucide-react"
import profileImg from '../assets/profileImg.jpg';


const ProfileCard = () => {
    return (
        <aside className="profile-sidebar">
            <div className="bg-white rounded-3xl p-6 text-black w-full max-w-[20rem] relative overflow-hidden shadow-2xl">
                {/* Decorative gradient blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br from-green-400/30 to-green-300/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-linear-to-tr from-green-300/20 to-transparent rounded-full blur-xl"></div>



                <div className="relative z-10">
                    {/* Photo with decorative ring */}
                    <div className="relative mb-5 z-10">
                        <div className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border-[2.5px] border-solid border-green-300/50 rounded-[1.75rem] rotate-[8deg]"></div>
                        <div className="absolute -top-3 -left-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] border-2 border-dashed border-green-200/50 rounded-3xl rotate-[-8deg]"></div>
                        <div className="p-2 bg-linear-to-br from-green-200 to-green-100 rounded-[1.25rem] relative z-10">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-auto rounded-2xl bg-gray-200 object-cover aspect-3/4"
                            />
                        </div>
                    </div>

                    {/* Name + availability badge */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <h2 className="text-[1.75rem] text-gray-700 font-extrabold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>Niraj Kumar</h2>
                    </div>
                    <p className="text-center text-gray-600 font-medium mb-6 text-sm leading-relaxed px-1">
                        Full-Stack Developer | DSA<br />
                        Enthusiast | Code that Performs
                    </p>

                    {/* Social icons with backgrounds */}
                    <div className="flex justify-center gap-5 pb-1">
                        <a href="https://github.com/nirajkr26" target='_blank' className="text-green-500 hover:text-green-600 hover:scale-110 transition-all">
                            <Github className="w-5 h-5 stroke-[1.5]" />
                        </a>
                        <a href="https://www.linkedin.com/in/nirajkr26/" target='_blank' className="text-green-500 hover:text-green-600 hover:scale-110 transition-all">
                            <Linkedin className="w-5 h-5 stroke-[1.5]" />
                        </a>
                        <a href="mailto:nirajkumargupta2642006@gmail.com" className="text-green-500 hover:text-green-600 hover:scale-110 transition-all">
                            <Mail className="w-5 h-5 stroke-[1.5]" />
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default ProfileCard