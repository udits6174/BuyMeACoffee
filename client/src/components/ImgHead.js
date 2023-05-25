
export default function ImgHead() {
    return (
        <div className="flex">
            <div className="w-40">
                <img
                    className="object-position: left top;"
                    src="https://upload.wikimedia.org/wikipedia/en/5/5c/Buy_Me_a_Coffee_Logo.png"
                    alt="Coffee Cup"
                />
            </div>
            <div className="flex-grow flex items-center">
                <p className="text-5xl font-cursive pl-8">Buy me a Coffee</p>
            </div>
        </div>
    );
}