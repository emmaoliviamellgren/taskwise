const AuthLayout = ({ children }) => {
    return (
        <div className='bg-slate-900 w-full h-screen overflow-hidden lg:grid lg:grid-cols-2'>
            {children}
        </div>
    );
};

export default AuthLayout;
