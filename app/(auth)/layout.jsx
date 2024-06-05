const AuthLayout = ({ children }) => {
    return (
        <div className='w-full h-screen overflow-hidden lg:grid lg:grid-cols-2'>
                {children}
        </div>
    );
};

export default AuthLayout;
