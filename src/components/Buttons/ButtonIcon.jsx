const ButtonIcon = ({children, onClick}) => {
    return (
        <button onClick={onClick} className="bg-blue-700 text-white hover:bg-blue-800 focus:bg-blue-800 rounded-full shadow-md p-4">
            {children}
        </button>
    )
}

export default ButtonIcon;