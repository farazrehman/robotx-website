import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-screen mx-auto flex justify-center bg-zinc-800">
            <div className="max-w-xxs md:max-w-md lg:max-w-lg xl:max-w-xl flex-grow flex flex-col justify-between items-center green py-2 gap-1 text-white">
                <div className="flex gap-4">
                    <a href="https://twitter.com/frcteam6962" target="_blank" rel="noreferrer">
                        <FaTwitter
                            size={24}
                            className="text-zinc-300 hover:text-white hover:cursor-pointer"
                        />
                    </a>
                    <a href="https://instagram.com/frcteam6962" target="_blank" rel="noreferrer">
                        <FaInstagram
                            size={24}
                            className="text-zinc-300 hover:text-white hover:cursor-pointer"
                        />
                    </a>
                </div>
                <span className="text-zinc-400 text-sm">
                    © {new Date().getFullYear()} RobotX. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export { Footer };